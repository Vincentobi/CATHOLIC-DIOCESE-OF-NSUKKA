import { Resend } from 'resend';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { generateEmailHtml } from '../utils/emailTemplate.js';

dotenv.config();

// Initialize Resend with the API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (req: Request, res: Response) => {
    const { name, email, phone, department, message, subject } = req.body;

    // Validate requirements
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY missing in environment variables');
        return res.status(500).json({
            success: false,
            message: 'Server email configuration is incomplete. Please check Render environment variables.'
        });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Nsukka Diocese Website <onboarding@resend.dev>', // Use verified domain once set up
            to: [process.env.EMAIL_USER || 'obioravincent123@gmail.com'], // Fallback for testing
            subject: subject || `New Inquiry: ${name} (${department})`,
            html: generateEmailHtml({ name, email, phone, department, message }),
            replyTo: email,
        });

        if (error) {
            console.error('Resend Error:', error);
            return res.status(400).json({
                success: false,
                message: error.message || 'Failed to send email via Resend.',
            });
        }

        console.log(`Email successfully sent via Resend: ${data?.id}`);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error: unknown) {
        console.error('Unexpected Error:', error);

        const unexpectedError = error as { message?: string };
        res.status(500).json({
            success: false,
            message: 'An unexpected error occurred while sending the email.',
            error: process.env.NODE_ENV === 'development' ? unexpectedError.message : undefined
        });
    }
};
