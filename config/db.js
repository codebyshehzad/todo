import mongoose from "mongoose";

export const connectDB = async () => {
    //console.log("Connecting to MongoDB...");
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);  //process code 1 means exist with failure, 0 means success. 
    }
};
