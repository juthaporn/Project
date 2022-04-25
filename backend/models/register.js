const db = require('../util/database');

class register{

    constructor(memberID, username, password, name, phone){
        this.memberID = memberID;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
    }

    // static findAll(){
    //     return db.execute("select * from member");
    // }

    save(){
        if(this.memberID){
            return db.execute(
                'update member set username=?, password=?, name=?, phone=? where memberID = ?',
                [this.username, this.password, this.name, this.phone, this.memberID]
            );
        }else{
            console.log("else", this)
            return db.execute(
                "insert into member (username, password, name, phone) values(?,?,?,?)",
                [this.username, this.password, this.name, this.phone]
            )
        }
    }

}

module.exports = register