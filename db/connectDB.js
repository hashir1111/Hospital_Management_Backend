const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected !");
  } catch (error) {
    console.error("Database connection error: ", error);
  }
};

module.exports = connectDB;
