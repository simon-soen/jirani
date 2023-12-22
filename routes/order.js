const router =require('express').Router();
const ordersController = require('../controllers/ordersController');

router.post("/add/:id", ordersController.addOrder);
router.get('/:id', ordersController.getUserOrders);

module.exports = router;