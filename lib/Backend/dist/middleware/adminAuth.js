import jwt from 'jsonwebtoken';
export const adminAuth = (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token || typeof token !== 'string') {
            return res.status(401).json({ message: 'Unauthorized, Login Again' });
        }
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecoded.username !== process.env.ADMIN_USERNAME) {
            return res.status(401).json({ message: 'Unauthorized, Login Again' });
        }
        next();
    }
    catch (error) {
        console.log("Error verifying token:", error);
        res.status(500).json({ message: 'Failed to verify token', error: error.message });
    }
};
