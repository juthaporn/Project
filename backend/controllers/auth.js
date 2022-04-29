const Login = require('../models/login');

exports.login = (req, res, next) => {

    let {username, password} = req.body;
    console.log(username);

    Login.findById(username, password).then(rows => {
            if(rows){
                rows = rows[0];
            }
            res.status(200).json({
                "result": true,
                "message": "success",
                "data": rows[0]
            });
        }).catch(error => {
            res.status(500).json({
                "result": false,
                "message": error.message
            });
        });
}