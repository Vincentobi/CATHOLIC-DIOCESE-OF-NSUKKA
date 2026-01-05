import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
    username: string;
}

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { token } = req.headers;
        if (!token || typeof token !== 'string') {
            return res.status(401).json({ message: 'Unauthorized, Login Again' });
        }
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
        if (tokenDecoded.username !== process.env.ADMIN_USERNAME) {
            return res.status(401).json({ message: 'Unauthorized, Login Again' });
        }
        next();
    } catch (error: any) {
        console.log("Error verifying token:", error);
        res.status(500).json({ message: 'Failed to verify token', error: error.message });
    }
}
