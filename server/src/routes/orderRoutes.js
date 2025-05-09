const express = require('express');
const controller = require('../controllers/orderController');

const router = express.Router();

router.get('/', controller.getAllOrders);                        // GET /api/orders
router.get('/:id', controller.getOrderById);                     // GET /api/orders/:id
router.post('/', controller.createOrder);                        // POST /api/orders
router.put('/:id', controller.updateOrder);                      // PUT /api/orders/:id
router.delete('/:id', controller.deleteOrder);                   // DELETE /api/orders/:id

module.exports = router;
