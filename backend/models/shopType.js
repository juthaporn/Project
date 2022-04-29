const db = require('../util/database');

class ShopType{

    constructor(shopTypeID , typeName){
        this.shopTypeID  = shopTypeID ;
        this.typeName = typeName;
    }

    static findAll(){
        return db.execute("select * from shoptype");
    }

    save(){
        if(this.shopTypeID){
            return db.execute(
                'update shoptype set typeName=? where shopTypeID = ?',
                [this.typeName, this.shopTypeID]
            );
        }else{
            return db.execute(
                'insert into shoptype (typeName) values(?)',
                [this.typeName]
            );
        }
    }

    static findById(shopTypeID){
        return db.execute(
            'select * from shoptype where shopTypeID = ?',
            [shopTypeID]
        );
    }

    static delById(shopTypeID){
        return db.execute(
            "delete from shoptype where shopTypeID = ?",
            [shopTypeID]
        )
    }
}

module.exports = ShopType