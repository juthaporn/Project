const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role')

router.get('/getAllRole',roleController.getAllRole);

router.post('/createRole',roleController.createRole);

// router.get('/editRole/:productID',roleController.getEditProduct);

router.get('/editRole',roleController.editRole);

router.get('/deleteRole/:roleID',roleController.deleteRole);

router.get('/getRole/:roleID',roleController.getRole);

module.exports = router;