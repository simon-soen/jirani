const router = require('express').Router();
const productController = require('../controllers/productController');
const upload = require('../config/multer');
const AWS = require('aws-sdk');

// Create product with image upload
router.post('/:id', upload.single('image'), productController.createProduct);

router.get('/search/:key', productController.searchProduct);
router.get('/category/:category', productController.getProductsByCategory); // Added "/category/"
router.get('/:id', productController.getProduct);
router.delete('/:productId', productController.deleteProduct);
router.delete('/:id/:productId', productController.deleteProduct);
router.get('/', productController.getAllProducts);

module.exports = router;