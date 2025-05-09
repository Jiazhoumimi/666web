# REST API Project

## 💎 Project Overview

This project demonstrates a full REST API workflow including user registration, login with JWT, and product creation through protected endpoints.  
It is built with Node.js, Express.js, and MongoDB, supporting full CRUD operations for users, products, and orders.  
The API also includes advanced features such as authentication, input validation, rate limiting, filtering, sorting, and pagination.

## 💎 API Endpoints - 15 Endpoints

### 💎 User Routes
- `GET /api/users` – Get all users
- `GET /api/users/:id` – Get user by ID
- `POST /api/users` – Create a user
- `PUT /api/users/:id` – Update user
- `DELETE /api/users/:id` – Delete user

### 💎 Product Routes
- `GET /api/products` – Get all products
- `GET /api/products/:id` – Get product by ID
- `POST /api/products` – Create a product
- `PUT /api/products/:id` – Update product
- `DELETE /api/products/:id` – Delete product

### 💎 Order Routes
- `GET /api/orders` – Get all orders
- `GET /api/orders/:id` – Get order by ID
- `POST /api/orders` – Create an order
- `PUT /api/orders/:id` – Update order
- `DELETE /api/orders/:id` – Delete order

## 🚀 Getting Started

### Install Dependencies
npm install

### Start the Server
npm start

## 🔐 Authentication (Additional Task)
JWT authentication is implemented to secure routes.

Auth Endpoints:
POST /api/auth/register – Register with name, email, and password
POST /api/auth/login – Login and receive a JWT token
Protected routes (e.g., GET /api/users) require:

Authorization: Bearer <authToken>
Tokens are valid for 1 hour and verified via middleware.

## 🛡️ Input Validation (Additional Task)
Input validation is implemented on registration and login routes using express-validator. Rules include:

All fields (name, email, password) are required
Email must be valid
Password must be at least 6 characters
Invalid input returns 400 Bad Request with an error message.

## 🚦 Rate Limiting (Additional Task)
Implemented using express-rate-limit to prevent abuse.

.env configuration:
RATE_LIMIT=10
RATE_WINDOW_MS=60000

In Login Page：
If the limit is exceeded:

{ "error": "Too many requests, please try again later." }

## 🔍 Query Filtering & Sorting (Additional Task)
GET /api/products supports dynamic filtering and sorting:

?category=Books — filter by category
?sort=price — sort by ascending price
?sort=-price — sort by descending price
Example:

GET /api/products?category=Books&sort=-price
No results will return:

{
  "message": "No products found matching the query.",
  "products": []
}

## 📚 Pagination (Additional Task)
Pagination is implemented via:

?page=1&limit=5
Combined example:

GET /api/products?category=Books&sort=-price&page=2&limit=5
API response includes:

{
  "page": 2,
  "limit": 5,
  "total": 12,
  "totalPages": 3,
  "products": [...]
}

## 💎 Environment Configuration
Create a .env file with:

MONGODB_URI=mongodb://localhost:27017/myapp
PORT=5000
TOKEN_SECRET=yourSuperSecretKey
RATE_LIMIT=10
RATE_WINDOW_MS=60000

## 🤝 How to Contribute

Fork this repository
Clone your fork
Create a new branch and commit changes
Push to your fork
Create a pull request

## 🐞 Reporting Issues

Please use GitHub Issues to report bugs or request features.