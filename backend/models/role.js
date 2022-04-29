const db = require('../util/database');

class Role{

    constructor(roleID, roleName, status){
        this.roleID = roleID;
        this.roleName = roleName;
        this.status = status;
    }

    static findAll(){
        return db.execute("select * from role");
    }

    save(){
        if(this.roleID){
            return db.execute(
                'update role set roleName=?, status=? where roleID = ?',
                [this.roleName, this.status, this.roleID]
            );
        }else{
            console.log("else", this)
            return db.execute(
                "insert into role (roleName, status) values(?,?)",
                [this.roleName, this.status]
            )
        }
    }

    static findById(roleID){
        return db.execute(
            'select * from role where roleID = ?',
            [roleID]
        );
    }

    static delById(roleID){
        return db.execute(
            "delete from role where roleID = ?",
            [roleID]
        )
    }

}

module.exports = Role