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
connectToDB()
    .then(() => {
        backfillNewsSlugs().catch(err => console.error("Slugs backfill failed:", err));
    })
    .catch((err) => {
        console.error("Database connection failed:", err.message);
        process.exit(1); // Kill the process if we can't connect to DB
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
const allowedOrigins =
    [process.env.FRONTEND_URL, 'http://localhost:3000', 'https://catholic-diocese-of-nsukka.vercel.app'].filter(Boolean) as string[];
app.use(cors({
    origin: (origin, callback) => {
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

app.get('/', (req, res) => {
    res.send('Diocese of Nsukka API is running');
});


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
