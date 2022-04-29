const db = require('../util/database');

class ProductType{

    constructor(typeID, typeName){
        this.typeID = typeID;
        this.typeName = typeName;
    }

    static findAll(){
        return db.execute("select * from producttype");
    }

    save(){
        if(this.typeID){
            return db.execute(
                'update producttype set typeName=? where typeID = ?',
                [this.typeName, this.typeID]
            );
        }else{
            return db.execute(
                'insert into producttype (typeName) values(?)',
                [this.typeName]
            );
        }
    }

    static findById(typeID){
        return db.execute(
            'select * from producttype where typeID = ?',
            [typeID]
        );
    }

    static delById(typeID){
        return db.execute(
            "delete from producttype where typeID = ?",
            [typeID]
        )
    }
}

module.exports = ProductType