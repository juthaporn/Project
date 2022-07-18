const db = require('../util/database');

class Member{

    constructor(memberID, username, password, name, phone, roleID){
        this.memberID = memberID;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.roleID = roleID;
    }

    static findAll(){
        return db.execute("select * from member");
    }

    save(){
        if(this.memberID){
            return db.execute(
                'update member set username=?, password=?, name=?, phone=?, roleID=? where memberID=?',
                [this.username, this.password, this.name, this.phone, this.memberID]
            );
        }else{
            return db.execute(
                'insert into member (username, password, name, phone, roleID) value(?,?,?,?,?)',
                [this.username, this.password, this.name, this.phone, this.roleID]
            )
        }
    }

    static findById(memberID){
        return db.execute(
            'select * from member where memberID = ?',
            [memberID]
        );
    }
    
    static delById(memberID){
        return db.execute(
            'delete from member where memberID=?',
            [memberID]
        )
    }

    static findByRoleId(roleId){
        return db.execute(
            'select * from member where roleID=?',
            [roleId]
        )
    }
}

module.exports = Member