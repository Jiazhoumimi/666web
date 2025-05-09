// controllers/orderController.js

const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const User = require('../models/userModel');

// GET ALL ORDERS
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
      .populate('products.product', 'name') 
      .select('user products total createdAt') 
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    console.error('❌ Error fetching orders:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch orders', error: error.message });
  }
};

// ✅ 根据 ID 获取单个订单
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email')
      .populate('products.product', 'name price')
      .select('user products total createdAt');

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, data: order });
  } catch (error) {
    console.error('❌ Error fetching order:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch order', error: error.message });
  }
};

// ✅ 创建新订单
exports.createOrder = async (req, res) => {
  try {
    const { user, products } = req.body;
    console.log('🛬 Incoming createOrder:', req.body);

    if (!user || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ success: false, message: 'Missing required fields: user, products' });
    }

    const userExists = await User.findById(user);
    if (!userExists) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    let total = 0;
    const validatedProducts = [];

    for (const item of products) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({ success: false, message: `Product not found: ${item.product}` });
      }

      const quantity = parseInt(item.quantity, 10);
      if (isNaN(quantity) || quantity < 1) {
        return res.status(400).json({ success: false, message: 'Quantity must be at least 1' });
      }

      total += product.price * quantity;
      validatedProducts.push({ product: product._id, quantity });
    }

    const newOrder = new Order({
      user,
      products: validatedProducts,
      total
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ success: true, data: savedOrder });
  } catch (error) {
    console.error('❌ Error creating order:', error);
    res.status(500).json({ success: false, message: 'Failed to create order', error: error.message });
  }
};

// ✅ 更新订单
exports.updateOrder = async (req, res) => {
  try {
    const { products } = req.body;

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ success: false, message: 'Missing or invalid products array' });
    }

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    let total = 0;
    const updatedProducts = [];

    for (const item of products) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({ success: false, message: `Product not found: ${item.product}` });
      }

      const quantity = parseInt(item.quantity, 10);
      if (isNaN(quantity) || quantity < 1) {
        return res.status(400).json({ success: false, message: 'Quantity must be at least 1' });
      }

      total += product.price * quantity;
      updatedProducts.push({ product: product._id, quantity });
    }

    order.products = updatedProducts;
    order.total = total;

    const updatedOrder = await order.save();
    res.status(200).json({ success: true, data: updatedOrder });
  } catch (error) {
    console.error('❌ Error updating order:', error);
    res.status(500).json({ success: false, message: 'Failed to update order', error: error.message });
  }
};

// ✅ 删除订单
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    if (!deletedOrder) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, message: 'Order deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting order:', error);
    res.status(500).json({ success: false, message: 'Failed to delete order', error: error.message });
  }
};
