import e from "express";
import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB Successfully")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)
}

export default connectDB;