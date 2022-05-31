const YearRent = require('../models/YearRent');

exports.getYearRent = (req, res, next) => {
    YearRent.findAll().then(yearRent => {
        res.status(200).json({
            "message": "success",
            "data": yearRent[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createYearRent = (req, res, next) => {
    const {rentDetail, year, rentalFee, shopID} = req.body
    console.log(req.body)
    const yearRent = new YearRent(null, rentDetail, year, rentalFee, shopID);
    yearRent.save().then(() => {
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

exports.getEditYearRent = (req, res, next) => {
    console.log(req.params)
    const rentID = req.params.typeID;
    YearRent.findById(rentID).then((yearRent) => {
        res.status(200).json({
            "message": "success",
            "data": yearRent[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.editYearRent = (req, res, next) => {
    const {rentID, rentDetail, year, rentalFee, shopID} = req.body
    const yearRent = new YearRent(rentID, rentDetail, year, rentalFee, shopID);
    yearRent.save().then(() => {
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

exports.deleteYearRent = (req, res, next) => {
    console.log(req.params)
    const {rentID} = req.params;
    YearRent.delById(rentID).then(() => {
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