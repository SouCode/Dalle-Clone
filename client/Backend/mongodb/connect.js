const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const url = process.env.MONGODB_URL;
    if (!url) {
      throw new Error('MongoDB connection URL is missing');
    }
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
