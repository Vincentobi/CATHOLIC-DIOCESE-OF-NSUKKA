import nodemailer from 'nodemailer';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { generateEmailHtml } from '../utils/emailTemplate.js';

dotenv.config();

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // You might need to change this depending on the email provider or use host/port
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export const sendEmail = async (req: Request, res: Response) => {
    const { name, email, phone, department, message, subject } = req.body;

    // Validate requirements
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Email credentials missing in environment variables');
        return res.status(500).json({
            success: false,
            message: 'Server email configuration is incomplete. Please check Render environment variables.'
        });
    }

    try {
        const mailOptions = {
            // Note: Gmail SMTP often requires the 'from' address to be the authenticated user
            from: `"Nsukka Diocese Website" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: subject || `New Inquiry: ${name} (${department})`,
            html: generateEmailHtml({ name, email, phone, department, message }),
            replyTo: email // This ensures "Reply" goes to the person who filled the form
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email successfully sent from ${email} to ${process.env.EMAIL_USER}`);

        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error: unknown) {
        console.error('SMTP Error:', error);

        const mailError = error as { code?: string; command?: string; message?: string };

        // Provide more helpful error messages for common Gmail issues
        let errorMessage = 'Failed to send email. please try again later.';
        if (mailError.code === 'EAUTH') {
            errorMessage = 'Email authentication failed. Please check your App Password.';
        } else if (mailError.command === 'CONN') {
            errorMessage = 'Could not connect to email server.';
        }

        res.status(500).json({
            success: false,
            message: errorMessage,
            error: process.env.NODE_ENV === 'development' ? mailError.message : undefined
        });
    }
};
