const ShopType = require('../models/ShopType');

exports.getShopType = (req, res, next) => {
    ShopType.findAll().then(shopType => {
        res.status(200).json({
            "message": "success",
            "data": shopType[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createShopType = (req, res, next) => {
    const {typeName} = req.body
    console.log(req.body)
    const shopType = new ShopType(null ,typeName);
    shopType.save().then(() => {
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

exports.getEditShopType = (req, res, next) => {
    console.log(req.params)
    const typeID = req.params.typeID;
    ShopType.findById(typeID).then((shopType) => {
        res.status(200).json({
            "message": "success",
            "data": shopType[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.editShopType = (req, res, next) => {
    const {typeID, typeName} = req.body
    const shopType = new ShopType(typeID, typeName);
    shopType.save().then(() => {
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

exports.deleteShopType = (req, res, next) => {
    console.log(req.params)
    const {typeID} = req.params;
    ShopType.delById(typeID).then(() => {
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