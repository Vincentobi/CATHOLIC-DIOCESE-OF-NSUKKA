import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const adminLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;

        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ username }, process.env.JWT_SECRET as string);
            res.status(200).json({ success: true, message: "Login successful", token });
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
        }

    } catch (error: any) {
        console.log("Login error:", error);
        res.status(500).json({ success: false, message: "Login failed", error: error.message });
    }
}

export { adminLogin };
