
### 💎 666web – Order Management Frontend

### 💎 Project Purpose

666web is a React-based web client designed to interact with a secure RESTful API backend.
It enables administrators or authorized users to manage product listings through an intuitive interface.

### Core Features:
- User registration
- Secure login with JWT authentication
- Product management:

- Create products
- Edit products
- Delete products
- View all products (with filtering/sorting/pagination)
This frontend is tightly integrated with a backend built using Node.js, Express, and MongoDB.

### Application Structure

666web/
├── .env                   # API base URL configuration
├── index.html             # React root mount point
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Vite configuration
├── README.md              # Project documentation
├── public/
│   └── favicon.svg        # Site icon
└── src/
    ├── App.jsx            # Root application component
    ├── main.jsx           # React DOM entry point
    ├── assets/            # Static image or style assets
    ├── components/        # Reusable UI components (e.g. buttons, forms)
    ├── pages/             # Page components (e.g. LoginPage, ProductList, EditProduct)
    └── services/          # API interaction logic (e.g. productService.js)

### 🚀 Getting Started

💎 Install dependencies
npm install

💎 Run development server
npm run dev

💎 Build for production
npm run build

🔍 Preview production build
npm run preview
⚙️ Configuration

### Create a .env file in the root directory:

API_BASE = 'https://n11501910.ifn666.com/assessment02/api'

This is used to define the base URL for all API requests.

### 📚 Dependencies

React
Vite
Axios (recommended for API requests)

### 🤝 Contributing

Fork this repository
Create a new branch: git checkout -b feature/YourFeature
Commit and push your changes
Open a pull request

### 🐞 Reporting Issues

Use the GitHub Issues tab to report bugs or request new features.