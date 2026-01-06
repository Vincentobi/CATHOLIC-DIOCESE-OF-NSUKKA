import mongoose from 'mongoose';
const connectToDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected successfully');
    });
    if (!process.env.MONGODB_URL) {
        throw new Error('MONGODB_URL is not defined in environment variables');
    }
    await mongoose.connect(process.env.MONGODB_URL, {
        dbName: 'catholic-diocese-of-nsukka'
    });
};
export default connectToDB;
