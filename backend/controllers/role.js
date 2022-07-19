const Role = require('../models/Role')

exports.getAllRole = (req, res, next) => {
    Role.findAll().then(role => {
        res.status(200).json({
            "message": "success",
            "data": role[0]
        });
    }).catch(err => {
        res.status(500).json({
            "message": err
        })
    })
}

exports.createRole = (req, res, next) => {
    console.log(req.body)
    const {roleID, roleName, status} = req.body
    const role = new Role (null, roleName, status)
    role.save().then(() => {
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

exports.editRole = (req, res, next) => {
    console.log(req.body)
    const {roleID ,roleName, status} = req.body
    const role = new Role (roleID, roleName, status)
    
    role.save().then(() => {
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

exports.deleteRole = (req, res, next) => {
    const {roleID} = req.params;
    Role.delById(roleID).then(() => {
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

exports.getRole = (req, res, next) => {
    const {roleID} = req.params;
    Role.findByRoleId(roleID).then((role) => {
        res.status(200).json({
            "message": "success",
            "data": role
        })
    }).catch(err => {
        res.status(500).json({
            "message": err
        })
    })
}