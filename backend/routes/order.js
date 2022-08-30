const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order')


router.get('/getOrder', orderController.getOrder);

router.post('/createOrder', orderController.createOrder);

router.get('/getEditOrder/:orderID', orderController.getEditOrder);

router.post('/editOrder', orderController.editOrder);

router.get('/deleteOrder/:orderID', orderController.deleteOrder);

module.exports = router;