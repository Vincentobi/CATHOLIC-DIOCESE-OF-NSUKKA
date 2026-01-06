import mongoose from 'mongoose';

const connectToDB = async (): Promise<void> => {
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected successfully');
    });

    if (!process.env.MONGODB_URL) {
        throw new Error('Environment Variable "MONGODB_URL" is missing in Render settings');
    }

    await mongoose.connect(process.env.MONGODB_URL, {
        dbName: 'catholic-diocese-of-nsukka'
    });
}

export default connectToDB;
