const db = require('../util/database');

class Login{

    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    // static findAll(){
    //     return db.execute("select * from member");
    // }

    // save(){
    //     if(this.memberID){
    //         return db.execute(
    //             'update member set username=?, password=?, name=?, phone=? where memberID = ?',
    //             [this.username, this.password, this.name, this.phone, this.memberID]
    //         );
    //     }else{
    //         console.log("else", this)
    //         return db.execute(
    //             "insert into member (username, password, name, phone) values(?,?,?,?)",
    //             [this.username, this.password, this.name, this.phone]
    //         )
    //     }
    // }

    static findById(username, password){
        return db.execute(
            'select * from member where username = ? and password = ?',
            [username, password]
        );
    }

}

module.exports = Login