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

    try {
        const mailOptions = {
            from: `"${name}" <${email}>`, // sender address
            to: process.env.EMAIL_USER, // list of receivers (typically the diocese admin)
            subject: subject || `New Inquiry from ${name} - ${department}`, // Subject line
            html: generateEmailHtml({ name, email, phone, department, message }),
            replyTo: email
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error: unknown) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email', error: error });
    }
};
