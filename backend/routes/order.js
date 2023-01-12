const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order')


router.get('/getOrder', orderController.getOrder);

router.get('/getOrderByShopID/:shopID', orderController.getOrderByShopID);

router.get('/getOrderBymemberID/:memberID', orderController.getOrderBymemberID);

router.get('/getsumTotal/:shopID',orderController.getsumTotal);

router.get('/updateOrderStatus/:orderID/:orderStatus', orderController.updateOrderStatus);

router.get('/getOrderByID/:shopID', orderController.getOrderByID);

router.post('/createOrder', orderController.createOrder);

router.get('/getEditOrder/:orderID', orderController.getEditOrder);

router.post('/editOrder', orderController.editOrder);

router.get('/deleteOrder/:orderID', orderController.deleteOrder);

router.get('/getTopProduct',orderController.getTopProduct);

module.exports = router;