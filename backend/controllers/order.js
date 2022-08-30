const Order = require('../models/Order');

exports.getOrder= (req, res, next) => {
    Order.findAll().then(order => {
        res.status(200).json({
            data: order[0],
            "message": "success"
            
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createOrder = (req, res, next) => {
    console.log(req.body)
    const {orderDate, orderTime, orderStatus, subtotal, shopID, memberID} = req.body
    const order = new Order(null ,orderDate, orderTime, orderStatus, subtotal, shopID, memberID);
    order.save().then(() => {
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

exports.getEditOrder = (req, res, next) => {
    const {orderID} = req.params
    Order.findById(orderID).then((order) => {
        res.status(200).json({
            "message": "success",
            "data": order[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.editOrder = (req, res, next) => {
    console.log(req.body)
    const {orderID, orderDate, orderTime, orderStatus, subtotal, shopID, memberID} = req.body;
    const order = new Order(orderID, orderDate, orderTime, orderStatus, subtotal, shopID, memberID)
    order.save().then(() => {
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

exports.deleteOrder = (req, res, next) => {
    // const productID = req.query.product_id;
    console.log(req.params)
    const {orderID} = req.params;
    Order.delById(orderID).then(() => {
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
