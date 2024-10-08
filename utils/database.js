import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true); // Optional, depending on your preference
    
    if (isConnected) {
        console.log("MongoDB is already connected.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt"
        });
        isConnected = true;
        console.log("MongoDB connected.");
    } catch (error) {
        console.log("Failed to connect to MongoDB:", error);
    }
};
