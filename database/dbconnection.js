import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "trial",
      useNewUrlParser: true, // Optional: good practice for parsing MongoDB connection strings
      useUnifiedTopology: true, // Optional: enables the new unified topology layer
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.error(`Error connecting to the database: ${err.message}`);
  }
};

export default dbConnection;