const mongoose = require("mongoose");

class DatabaseLoader {
  static init() {
    // Connect to MongoDB
    const connectString = process.env.DB_USER
      ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTERNAME}`
      : `mongodb://localhost/27017`;
    mongoose.connect(connectString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    return db;
  }
}

module.exports = { DatabaseLoader };
