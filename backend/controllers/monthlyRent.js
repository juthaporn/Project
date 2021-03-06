const MonthlyRentalFee = require('../models/MonthlyRent')
const moment = require('moment')

exports.getMonthlyRent = (req, res, next) => {
    MonthlyRentalFee.findAll().then(monthlyRentalFee => {
        res.status(200).json({
            "message": "success",
            "data": monthlyRentalFee[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createMonthlyRent = (req, res, next) => {
    const {rentalDetail, month, waterBill, waterUnit, electricityBill, powerUnit, cleaningFee, 
        wasteDisposalFee, shopID} = req.body
        console.log(req.body)

    const monthlyRentalFee = new MonthlyRentalFee(null, rentalDetail, moment(new Date(month)).format('YYYY-MM-DD'), waterBill, waterUnit, 
        electricityBill, powerUnit, cleaningFee, wasteDisposalFee, shopID)
    monthlyRentalFee.save().then(() => {
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