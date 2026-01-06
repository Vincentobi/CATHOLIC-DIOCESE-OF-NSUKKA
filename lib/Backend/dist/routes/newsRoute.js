import express from 'express';
import { getNews, addNews, addMultipleNews, removeNews, getNewsBySlug } from '../controllers/newsController.js';
import upload from '../middleware/multer.js';
import { adminAuth } from '../middleware/adminAuth.js';
const newsRouter = express.Router();
newsRouter.post('/add', adminAuth, upload.array('image'), addNews); // For single news
newsRouter.post('/add-multiple', adminAuth, upload.array('images'), addMultipleNews); // For multiple news
newsRouter.get('/get', getNews);
newsRouter.get('/:slug', getNewsBySlug);
newsRouter.delete('/remove', adminAuth, removeNews);
export default newsRouter;
