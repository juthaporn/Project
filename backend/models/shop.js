// const res = require('express/lib/response');
const db = require('../util/database');

class Shop{

    constructor(shopID, shopName, shopPhone, shopDetail, openingTime, shopType, shopRentalContract, memberID, shopTypeID){
        this.shopID =shopID;
        this.shopName = shopName;
        this.shopPhone = shopPhone;
        this.shopDetail = shopDetail;
        this.openingTime = openingTime;
        this.shopType = shopType;
        this.shopRentalContract = shopRentalContract;
        this.memberID = memberID;
        this.shopTypeID = shopTypeID;
    }

    static findAll(){
        return db.execute("select * from shop join member on shop.memberID = member.memberID ");
    }

    save(){
        if(this.shopID){
            return db.execute(
                'update shop set shopName=?, shopPhone=?, shopDetail=?, openingTime=?, shopType=?, shopRentalContract=?, memberID=?, shopTypeID=? where shopID=?',
                [this.shopName, this.shopPhone, this.shopDetail, this.openingTime, this.shopType, this.shopRentalContract, this.memberID, this.shopTypeID, this.shopID]
            );
        }else{
            return db.execute(
                'insert into shop (shopName, shopPhone, shopDetail, openingTime, shopType, shopRentalContract, memberID, shopTypeID) values(?,?,?,?,?,?,?,?)',
                [this.shopName, this.shopPhone, this.shopDetail, this.openingTime, this.shopType, this.shopRentalContract, this.memberID, this.shopTypeID]
            );
        }
    }

    static findById(shopID){
        return db.execute(
            'select * from shop where shopID = ?', 
            [shopID]
        );
    }

    static delById(shopID){
        return db.execute(
            "delete from shop where shopID = ?",
            [shopID]
        )
    }
}

module.exports = Shop