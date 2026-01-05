import mongoose, { Schema, Document } from 'mongoose';

export interface INews extends Document {
    date: Date;
    title: string;
    slug: string;
    content: string;
    image: string[];
    isFeatured: boolean;
}

const newSchema: Schema = new mongoose.Schema({
    date: { type: Date, required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    image: { type: Array, required: true },
    isFeatured: { type: Boolean, default: false },
});

const News = mongoose.model<INews>('News', newSchema);

export default News;
