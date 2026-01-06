import { Router } from "express";
import Parish from "../models/parishes.js";
import Deanary from "../models/deanary.js";
const router = Router();
router.get("/", async (req, res) => {
    try {
        const { search = "", deanary = "", page = "1", limit = "6" } = req.query;
        const query = {};
        if (search) {
            query.$or = [
                { name: { $regex: String(search), $options: "i" } },
                { town: { $regex: String(search), $options: "i" } }
            ];
        }
        if (deanary) {
            query.deanary = deanary;
        }
        const skip = (Number(page) - 1) * Number(limit);
        const parishes = await Parish.find(query)
            .populate("deanary")
            .sort({ name: 1 })
            .skip(skip)
            .limit(Number(limit));
        const total = await Parish.countDocuments(query);
        res.json({
            data: parishes,
            pagination: {
                hasMore: skip + parishes.length < total,
                total,
                page: Number(page)
            }
        });
    }
    catch (error) {
        console.error("Error fetching parishes:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.get("/deanaries", async (req, res) => {
    try {
        const deanaries = await Deanary.find().sort({ name: 1 });
        res.json(deanaries);
    }
    catch (error) {
        console.error("Error fetching deanaries:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
export default router;
