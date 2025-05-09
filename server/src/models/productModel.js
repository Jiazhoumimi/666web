// models/productModel.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxLength: 100
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be a positive number']
  },
  category: {
    type: String,
    required: true,
    enum: ['Electronics', 'Clothing', 'Books', 'Home Appliances']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Product", productSchema);
