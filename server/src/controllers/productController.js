const Product = require('../models/productModel');

// ✅ GET ALL PRODUCT FILTERING SORTING PAGINATON
exports.getAllProducts = async (req, res) => {
  try {
    const filter = {};
    const sort = {};

    // FILTERING
    if (req.query.category) {
      filter.category = req.query.category;
    }
    if (req.query.name) {
      filter.name = { $regex: req.query.name, $options: 'i' }; 
    }

    // SORTING
    if (req.query.sort) {
      const field = req.query.sort;
      sort[field.replace("-", "")] = field.startsWith("-") ? -1 : 1;
    }

    // PAGINATION
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    // Data query
    const total = await Product.countDocuments(filter);
    const products = await Product.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    if (products.length === 0) {
      return res.status(200).json({
        message: "No products found matching the query.",
        page,
        limit,
        total: 0,
        totalPages: 0,
        products: []
      });
    }

    res.status(200).json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      products
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Invalid query parameters" });
  }
};

// ✅ GET PRODUCTS BY ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: "Error fetching product" });
  }
};

// ✅ CREATE PRODUCTS
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// ✅ UPDATE PRODUCTS
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Product not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: "Error updating product" });
  }
};

// ✅ DELETE PRODUCTS
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting product" });
  }
};
