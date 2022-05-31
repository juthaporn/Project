const express = require('express');
const router = express.Router();
const monthlyRentController = require('../controllers/monthlyRent')

router.get('/getMonthlyRent',monthlyRentController.getMonthlyRent);

router.post('/createMonthlyRent',monthlyRentController.createMonthlyRent);


module.exports = router;