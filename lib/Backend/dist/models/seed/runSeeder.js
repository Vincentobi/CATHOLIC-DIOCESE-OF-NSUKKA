import 'dotenv/config';
import connectToDB from '../../config/mongodb';
import seedDeanaries from './seedDeanaries';
import seedParishes from './seedParishes';
import mongoose from 'mongoose';
const runSeeder = async () => {
    try {
        console.log("🚀 Starting database seeding...");
        await connectToDB();
        console.log("⏳ Seeding Deanaries...");
        await seedDeanaries();
        console.log("⏳ Seeding Parishes...");
        await seedParishes();
        console.log("✅ Database seeding completed successfully!");
    }
    catch (error) {
        console.error("❌ Database seeding failed:", error);
        process.exit(1);
    }
    finally {
        await mongoose.disconnect();
        console.log("👋 Disconnected from MongoDB");
        process.exit(0);
    }
};
runSeeder();
