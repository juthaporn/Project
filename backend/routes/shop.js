const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop')


router.get('/getAllShop', shopController.getAllShop);

router.post('/createShop', shopController.createShop);

router.get('/getOneShop/:shopID', shopController.getOneShop);

router.post('/editShop', shopController.editShop);

router.get('/deleteShop/:shopID', shopController.deleteShop);

router.get('/getShopByMemberID/:memberID', shopController.getShopByMemberID);

router.get('/getRentByShop/:shopID',shopController.getRentByShop);

module.exports = router;