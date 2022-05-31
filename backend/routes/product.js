const express = require('express');
const router = express.Router();
const productController = require('../controllers/product')

router.get('/getProduct',productController.getProduct);

router.post('/createProduct',productController.createProduct);

router.get('/getEditProduct/:productID',productController.getEditProduct);

router.get('/editProduct',productController.editProduct);

router.get('/deleteProduct/:productID',productController.deleteProduct);

module.exports = router;