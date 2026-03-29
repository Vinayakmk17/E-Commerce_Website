const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  items: [
    {
      name: String,
      price: Number,
      qty: Number
    }
  ],
  total: Number
}, {
  timestamps: true
});

module.exports = mongoose.model("Order", orderSchema);