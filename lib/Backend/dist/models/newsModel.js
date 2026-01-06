import mongoose from 'mongoose';
const newSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    image: { type: Array, required: true },
    isFeatured: { type: Boolean, default: false },
});
const News = mongoose.model('News', newSchema);
export default News;
