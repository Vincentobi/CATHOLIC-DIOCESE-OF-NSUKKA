import { v2 as cloudinary } from 'cloudinary';
import newsModel from '../models/newsModel.js';
import { generateSlug } from '../utils/slugify.js';
// Function for adding News
export const addNews = async (req, res) => {
    try {
        console.log("=== ADD NEWS REQUEST ===");
        console.log("Body:", req.body);
        console.log("Files:", req.files);
        const { date, title, content, isFeatured } = req.body;
        const images = req.files || [];
        console.log("Parsed data:", { date, title, content, isFeatured, imageCount: images.length });
        if (!images || images.length === 0) {
            res.status(400).json({ message: 'At least one image is required' });
            return;
        }
        // If this one is featured, unset others
        if (isFeatured === 'true' || isFeatured === true) {
            await newsModel.updateMany({ isFeatured: true }, { isFeatured: false });
        }
        console.log("Starting Cloudinary upload...");
        const imagesUrl = await Promise.all(images.map(async (item) => {
            console.log("Uploading file:", item.filename);
            const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
            console.log("Upload successful:", result.secure_url);
            return result.secure_url;
        }));
        let slug = generateSlug(title);
        // ensure uniqueness
        const existing = await newsModel.findOne({ slug });
        if (existing) {
            slug = `${slug}-${Date.now()}`;
        }
        const newsData = {
            date,
            title,
            slug,
            content,
            image: imagesUrl,
            isFeatured: isFeatured === 'true' || isFeatured === true
        };
        console.log("Saving to database:", newsData);
        const news = new newsModel(newsData);
        await news.save();
        console.log("News saved successfully!");
        res.status(201).json({ message: 'News added successfully', data: newsData });
    }
    catch (error) {
        console.error("=== ERROR ADDING NEWS ===");
        console.error("Error type:", error instanceof Error ? error.constructor.name : typeof error);
        console.error("Error message:", error instanceof Error ? error.message : error);
        console.error("Full error:", error);
        res.status(500).json({ message: 'Failed to add news', error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
//Function for removing News
export const removeNews = async (req, res) => {
    try {
        const { id } = req.params;
        const news = await newsModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'News removed successfully', data: news });
    }
    catch (error) {
        console.log("Error removing news:", error);
        res.status(500).json({ message: 'Failed to remove news', error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
export const getNews = async (req, res) => {
    try {
        const news = await newsModel.find();
        res.status(200).json({ message: 'News fetched successfully', data: news });
    }
    catch (error) {
        console.log("Error fetching news:", error);
        res.status(500).json({ message: 'Failed to fetch news', error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
export const addMultipleNews = async (req, res) => {
    try {
        const newsItems = req.body; // Assuming the body contains an array of news items
        res.json({ message: 'Created multiple news items', data: newsItems });
    }
    catch (error) {
        console.log("Error adding multiple news:", error);
        res.status(500).json({ message: 'Failed to add multiple news', error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
export const getNewsBySlug = async (req, res) => {
    const { slug } = req.params;
    const news = await newsModel.findOne({ slug });
    if (!news) {
        return res.status(404).json({ message: 'News not found' });
    }
    res.json(news);
};
