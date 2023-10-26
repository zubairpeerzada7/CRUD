const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
});

module.exports = mongoose.model("Company", productSchema);
