const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  price: Number,
  description: String,
  image: String,
  sizes: [String], // ✅ S, M, L
  rating: Number,  // ✅ 4.5 etc
  numReviews: Number
}, {
  timestamps: true
});

module.exports = mongoose.model("Product", productSchema);