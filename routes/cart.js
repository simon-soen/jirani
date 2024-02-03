const router =require('express').Router();
const cartController = require('../controllers/cartController');


router.get("/find/:id", cartController.getcart);
router.get('/count/:id', cartController.countCartItems);
router.post("/add/:id", cartController.addTocart);
router.post("/quantity", cartController.decrementCartItem);
router.delete("/:cartItemId", cartController.deleteCartItem)


module.exports = router;