const express = require('express');
const router = express.Router();
const orderDetailController = require('../controllers/orderDetail')

router.get('/getOrderDetail', orderDetailController.getOrderDetail);

router.get('/createOrderDetail', orderDetailController.createOrderDetail);

router.get('/getEditOrderDetail/:orderDetailID', orderDetailController.getEditOrderDetail);

router.post('/editOrderDetail', orderDetailController.editOrderDetail);

router.get('/deleteOrderDetail/:orderDetailID', orderDetailController.deleteOrderDetail);

module.exports = router;
