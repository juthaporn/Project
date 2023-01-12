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

exports.getOrderByShopID= (req, res, next) => {
    const {shopID} = req.params;
    console.log(shopID);
    Order.getOrderByshopID(shopID).then(t => {
        res.status(200).json({
            data: t,
            "message": "success"
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.updateOrderStatus= (req, res, next) => {
    const {orderID,orderStatus} = req.params;
    console.log(orderID);
    Order.updateStatus(orderID,orderStatus ).then(t => {
        res.status(200).json({
            data: t,
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
    order.save().then((r) => {
        console.log(r);
        res.status(200).json({
            "message": "success",
            "result": true,
            "insertId": r[0].insertId
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

exports.getOrderByID = (req, res, next) => {
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
exports.getOrderBymemberID = (req, res, next) => {
    // const productID = req.query.product_id;
    console.log(req.params)
    const {mmemID} = req.params;
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

exports.getsumTotal = (req, res, next) => {
    console.log(req.params)
    const {shopID} = req.params;
    Order.delById(shopID).then(() => {
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