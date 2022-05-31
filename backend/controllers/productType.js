const ProductType = require('../models/productType');

exports.getProductType = (req, res, next) => {
    ProductType.findAll().then(productType => {
        res.status(200).json({
            "message": "success",
            "data": productType[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createProductType = (req, res, next) => {
    const {typeName} = req.body
    console.log(req.body)
    // console.log("controller", typeName)
    const productType = new ProductType(null ,typeName);
    productType.save().then(() => {
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

exports.getEditProductType = (req, res, next) => {
    console.log(req.params)
    const typeID = req.params.typeID;
    ProductType.findById(typeID).then((productType) => {
        res.status(200).json({
            "message": "success",
            "data": productType[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.editProductType = (req, res, next) => {
    const {typeID, typeName} = req.body
    
    const productType = new ProductType(typeID, typeName);
    productType.save().then(() => {
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

exports.deleteProductType = (req, res, next) => {
    console.log(req.params)
    const {typeID} = req.params;
    ProductType.delById(typeID).then(() => {
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