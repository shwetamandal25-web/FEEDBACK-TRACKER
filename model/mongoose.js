const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected successfully!");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

module.exports = connectDB;