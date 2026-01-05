interface EmailData {
    name: string;
    email: string;
    phone?: string;
    department: string;
    message: string;
}

export const generateEmailHtml = ({ name, email, phone, department, message }: EmailData): string => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Inquiry - Catholic Diocese of Nsukka</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f8; font-family: 'Arial', sans-serif; -webkit-font-smoothing: antialiased;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); margin-top: 40px; margin-bottom: 40px;">
        
        <!-- Header -->
        <div style="background-color: #29a116; padding: 40px 20px; text-align: center;">
            <img src="/images/IHS_Logo.jpg" alt="Catholic Diocese of Nsukka Logo" style="max-width: 80px; height: auto; margin-bottom: 20px;"/>
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Catholic Diocese of Nsukka</h1>
            <p style="color: #e8f5e9; margin: 10px 0 0; font-size: 16px;">New Inquiry Received</p>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">
            <div style="margin-bottom: 30px;">
                <p style="color: #636f88; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 10px;">Department</p>
                <div style="background-color: #f3faf0; color: #29a116; display: inline-block; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 14px;">
                    ${department}
                </div>
            </div>

            <div style="margin-bottom: 25px;">
                <p style="color: #636f88; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 5px;">Sender Details</p>
                <h3 style="color: #111318; font-size: 18px; margin: 0 0 5px;">${name}</h3>
                <p style="color: #4b5563; font-size: 16px; margin: 0 0 2px;"><a href="mailto:${email}" style="color: #4b5563; text-decoration: none;">${email}</a></p>
                <p style="color: #4b5563; font-size: 16px; margin: 0;">${phone ? phone : 'No phone number provided'}</p>
            </div>

            <div style="border-top: 1px solid #edf2f7; margin: 25px 0;"></div>

            <div>
                <p style="color: #636f88; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 15px;">Message</p>
                <div style="background-color: #fafafa; border-left: 4px solid #29a116; padding: 20px; color: #374151; line-height: 1.6; font-size: 16px;">
                    ${message.replace(/\n/g, '<br>')}
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 25px; text-align: center; border-top: 1px solid #edf2f7;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">&copy; ${new Date().getFullYear()} Catholic Diocese of Nsukka. All rights reserved.</p>
            <p style="color: #94a3b8; font-size: 12px; margin: 5px 0 0;">Diocesan Secretariat, P.O. Box 32, Nsukka, Enugu State, Nigeria</p>
        </div>
    </div>
</body>
</html>
    `;
};
