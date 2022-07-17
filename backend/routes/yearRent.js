const express = require('express');
const router = express.Router();
const yearRentController = require('../controllers/yearRent')

router.get('/getYearRent',yearRentController.getYearRent);

router.post('/createYearRent',yearRentController.createYearRent);

router.get('/getEditYearRent/:rentID',yearRentController.getEditYearRent);

router.get('/editYearRent',yearRentController.editYearRent);

router.get('/deleteYearRent/:rentID',yearRentController.deleteYearRent);

module.exports = router;