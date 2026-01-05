import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectToDB from './config/mongodb.js';
import cloudinary from './config/cloudinary.js';
import newsRouter from './routes/newsRoute.js';
import eventsRouter from './routes/eventsRoute.js';
import emailRouter from './routes/emailRoute.js';
import { adminLogin } from './controllers/adminController.js';
import { getNews, removeNews, addMultipleNews } from './controllers/newsController.js';
import { generateSlug } from './utils/slugify.js';
import News from './models/newsModel.js';
import parishesRouter from './routes/parish.routes.js';


// App Configuration
const app = express();
const port = process.env.PORT || 8000;
connectToDB().then(() => {
    backfillNewsSlugs();
});

// call only if the imported module is a function
if (typeof cloudinary === 'function') {
    cloudinary();
} else {
    // cloudinary may already be configured and exported as an object
    console.log('Cloudinary module loaded');
}

// Middlewares
app.use(express.json());

const allowedOrigins = [
    process.env.FRONTEND_URL,
    'https://catholic-diocese-of-nsukka.vercel.app',
    'http://localhost:3000'
].filter(Boolean) as string[];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

// api endpoints
app.post('/api/login', adminLogin);
app.use('/api/news', newsRouter);
app.use('/api/events', eventsRouter);
app.use('/api/email', emailRouter);
app.use('/api/parishes', parishesRouter);
app.get('/api/getNews', getNews);
app.delete('/api/removeNews/:id', removeNews);
app.post('/api/addMultipleNews', addMultipleNews);


export const backfillNewsSlugs = async () => {
    const newsWithoutSlug = await News.find({ slug: { $exists: false } })

    for (const item of newsWithoutSlug) {
        let slug = generateSlug(item.title)

        const exists = await News.findOne({ slug })
        if (exists) {
            slug = `${slug}-${Date.now()}`
        }

        item.slug = slug
        await item.save()
    }

    console.log('✅ Slugs backfilled')
}

// Server Listener
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
