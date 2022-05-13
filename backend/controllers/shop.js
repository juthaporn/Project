const Shop = require('../models/Shop')

exports.getAllShop = (req, res, next) => {
    Shop.findAll().then(shop => {
        res.status(200).json({
            "message": "success",
            "data": shop
        });
    }).catch(err => {
        res.status(500).json({
            "message": err
        })
    })
}

exports.createShop = (req, res, next) => {
    console.log(req.body)
    const {shopName, shopPhone, shopDetail, openingTime, shopRentalContract, memberID, shopTypeID} = req.body;
    const shop = new Shop (null, shopName, shopPhone, shopDetail, openingTime, shopRentalContract, memberID, shopTypeID);
    shop.save().then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch(err => {
        res.status(200).json({
            "message": err
        })
    })
}

exports.getOneShop = (req, res, next) => {
    const {shopID} = req.params
    Shop.findById(shopID).then(shop => {
        res.status(200).json({
            "message": "success",
            "data": shop[0]
        });
    }).catch(err => {
        res.status(500).json({
            "message": err
        })
    })
}

exports.editShop = (req, res, next) => {
    console.log(req.body)
    const {shopID,shopName, shopPhone, shopDetail, openingTime, shopRentalContract, memberID, shopTypeID} = req.body;
    const shop = new Shop (shopID, shopName, shopPhone, shopDetail, openingTime, shopRentalContract, memberID, shopTypeID);
    shop.save().then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch(err => {
        res.status(200).json({
            "message": err,
            "result": false
        })
    })
}

exports.deleteShop = (req, res, next) => {
    const {shopID} = req.params;
    Shop.delById(shopID).then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch(err => {
        res.status(500).json({
            "message": err,
            "result": false
        })
    })
}

exports.getShopByMemberID = (req, res, next) => {
    const {memberID} = req.params;
    Shop.getShopByMemberID(memberID).then((shop) => {
        res.status(200).json({
            "message": "success",
            "data": shop
        });
    }).catch(err => {
        res.status(500).json({
            "message": err
        })
    })
}