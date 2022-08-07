const express = require('express');
const router = express.Router();
const productTypeController = require('../controllers/productType')

router.get('/getProductType',productTypeController.getProductType);

router.post('/createProductType',productTypeController.createProductType);

router.get('/getEditProductType/:typeID',productTypeController.getEditProductType);

router.post('/editProductType',productTypeController.editProductType);

router.get('/deleteProductType/:typeID',productTypeController.deleteProductType);

module.exports = router;