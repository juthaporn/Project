const express = require('express');
const router = express.Router();
const shopTypeController = require('../controllers/shopType')

router.get('/getShopType',shopTypeController.getShopType);

router.post('/createShopType',shopTypeController.createShopType);

router.get('/getEditShopType/:typeID',shopTypeController.getEditShopType);

router.get('/editShopType',shopTypeController.editShopType);

router.get('/deleteShopType/:typeID',shopTypeController.deleteShopType);

module.exports = router;