const OrderDetail = require('../models/OrderDetail');

exports.getOrderDetail= (req, res, next) => {
    Order.findAll().then(orderDetail => {
        res.status(200).json({
            data: orderDetail[0],
            "message": "success"
            
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createOrderDetail = (req, res, next) => {
    console.log(req.body)
    const {orderDetailID , detail, quantity, price, productID, orderID} = req.body
    const orderDetail = new OrderDetail(null ,orderDetailID , detail, quantity, price, productID, orderID);
    orderDetail.save().then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch((error) => {
        res.status(200).json({
            "message": error,
            "result": false
        });
    });
}

exports.getEditOrderDetail = (req, res, next) => {
    const {orderDetailID} = req.params
    orderDetail.findById(orderDetailID).then((orderDetail) => {
        res.status(200).json({
            "message": "success",
            "data": orderDetail[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.editOrderDetail = (req, res, next) => {
    console.log(req.body)
    const {orderDetailID , detail, quantity, price, productID, orderID} = req.body;
    const orderDetail = new OrderDetail(orderDetailID , detail, quantity, price, productID, orderID)
    orderDetail.save().then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch((error) => {
        res.status(200).json({
            "message": error,
            "result": false
        });
    });
}

exports.deleteOrderDetail = (req, res, next) => {
    // const productID = req.query.product_id;
    console.log(req.params)
    const {orderDetailID} = req.params;
    OrderDetail.delById(orderDetailID).then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error,
            "result": false
        });
    });
}

