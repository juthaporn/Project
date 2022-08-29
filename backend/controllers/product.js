const Product = require('../models/product');

exports.getProduct = (req, res, next) => {
    Product.findAll().then(products => {
        res.status(200).json({
            data: products[0],
            "message": "success"
            
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createProduct = (req, res, next) => {
    console.log(req.body)
    const {productName, productDetail, productPrice, typeID} = req.body
    const product = new Product(null ,productName, productDetail, productPrice, typeID);
    product.save().then(() => {
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

exports.getEditProduct = (req, res, next) => {
    const {productID} = req.params
    Product.findById(productID).then((products) => {
        res.status(200).json({
            "message": "success",
            "data": products[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.editProduct = (req, res, next) => {
    console.log(req.body)
    const {productID, productName, productDetail, productPrice, typeID} = req.body;
    // const product = new Product(null, product_name, brand, color, type, description, price);
    const product = new Product(productID, productName, productDetail, productPrice, typeID)
    product.save().then(() => {
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

exports.deleteProduct = (req, res, next) => {
    // const productID = req.query.product_id;
    console.log(req.params)
    const {productID} = req.params;
    Product.delById(productID).then(() => {
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

exports.getProductByShop = (req, res, next) => {
    // const productID = req.query.product_id;
    const {shopID} = req.params;
    Product.getProductByShop(shopID).then((product) => {
        res.status(200).json({
            "message": "success",
            "data": product
        });
    }).catch(err => {
        res.status(500).json({
            "message": err
        })
    })
}


exports.getOneProduct = (req, res, next) => {
    // const productID = req.query.product_id;
    const {productID} = req.params;
    Product.getOneProduct(productID).then((product) => {
        res.status(200).json({
            "message": "success",
            "data": product[0]
        });
    }).catch(err => {
        res.status(500).json({
            "message": err
        })
    })
}