const db = require('../util/database');

class Member{

    constructor(memberID, username, password, firstName, lastName, phone, roleID){
        this.memberID = memberID;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.roleID = roleID;
    }

    static findAll(){
        return db.execute("select * from member");
    }

    save(){
        if(this.memberID){
            return db.execute(
                'update member set username=?, password=?, firstName=?, lastName=?, phone=?, roleID=? where memberID=?',
                [this.username, this.password, this.firstName, this.lastName, this.phone, this.memberID]
            );
        }else{
            return db.execute(
                'insert into member (username, password, firstName, lastName, phone, roleID) value(?,?,?,?,?,?)',
                [this.username, this.password, this.firstName, this.lastName, this.phone, this.roleID]
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

    static updateRole(memberID, roleID){
        return db.execute(
            'update member set roleID =? where memberID=?',
            [roleID, memberID]
        )
    }
}

module.exports = Member