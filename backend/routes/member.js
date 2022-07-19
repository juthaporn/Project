const express = require('express');
const router = express.Router();
const memberController = require('../controllers/member')

router.get('/getAllMember', memberController.getAllMember);

router.post('/createMember', memberController.createMember)

router.get('/getOneMember/:memberID', memberController.getOneMember)

router.post('/editMember', memberController.editMember)

router.get('/deleteMember/:memberID', memberController.deleteMember)

router.get('/getMemberRole/:roleID', memberController.getMemberRole)

router.patch('/updateRole', memberController.updateRole)

module.exports = router;