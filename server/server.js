// 1. Load environment variables
require('dotenv').config();
console.log("✅ JWT secret:", process.env.TOKEN_SECRET);


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
app.set('trust proxy', 1); // Enable proxy trust for accurate rate limiting

const PORT = process.env.PORT || 5000;

// 2.Cors

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5175',
  'http://localhost:5176',
  'http://localhost:5179',
  'http://localhost:5180',             // localhost
  'https://n11501910.ifn666.com',      // Deployed
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



// Parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_WINDOW_MS) || 60000,
  max: parseInt(process.env.RATE_LIMIT) || 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." }
});

// 3. Import route modules
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const productRoutes = require('./src/routes/productRoutes');
const orderRoutes = require('./src/routes/orderRoutes');


// 4. Mount routes
app.use('/auth', limiter, authRoutes);
app.use('/users', limiter, userRoutes);
app.use('/products', limiter, productRoutes);
app.use('/orders', limiter, orderRoutes);

// ✅ Health check
app.get('/assessment02/ping', (req, res) => {
  res.json({ message: 'pong' });
});


// 5. Root path
app.get('/', (req, res) => {
  res.send('🌸 Assessment02 API is running 🌧️.');
});

// 6. Global 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// 7. Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdb')
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });

// 8. Start server
app.listen(PORT, () => {
  console.log(`🌸 Server is listening on port ${PORT}`);
});


module.exports = app;