// src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.set('trust proxy', 1);

// CORS config
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://n11501910.ifn666.com',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS: ' + origin));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiter
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_WINDOW_MS) || 60000,
  max: parseInt(process.env.RATE_LIMIT) || 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." }
});

// Mount routes
app.use('/auth', limiter, authRoutes);
app.use('/users', limiter, userRoutes);
app.use('/products', limiter, productRoutes);
app.use('/orders', limiter, orderRoutes);

// Health check
app.get('/assessment02/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Root path
app.get('/', (req, res) => {
  res.send('🌸 Assessment02 API is running 🌧️.');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = app;
