const express = require('express');
const controller = require('../controllers/productController');

const router = express.Router();


router.get('/', controller.getAllProducts);                      // GET /api/products
router.get('/:id', controller.getProductById);                   // GET /api/products/:id
router.post('/', controller.createProduct);                      // POST /api/products
router.put('/:id', controller.updateProduct);                    // PUT /api/products/:id
router.delete('/:id', controller.deleteProduct);                 // DELETE /api/products/:id

module.exports = router;
