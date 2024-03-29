// const res = require('express/lib/response');
const db = require('../util/database');

class Shop{

    constructor(shopID, shopName, shopPhone, shopDetail, openingTime, shopRentalContract, memberID, shopTypeID){
        this.shopID =shopID;
        this.shopName = shopName;
        this.shopPhone = shopPhone;
        this.shopDetail = shopDetail;
        this.openingTime = openingTime;
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
                'update shop set shopName=?, shopPhone=?, shopDetail=?, openingTime=?,  shopRentalContract=?, memberID=?, shopTypeID=? where shopID=?',
                [this.shopName, this.shopPhone, this.shopDetail, this.openingTime, this.shopRentalContract, this.memberID, this.shopTypeID, this.shopID]
            );
        }else{
            return db.execute(
                'insert into shop (shopName, shopPhone, shopDetail, openingTime, shopRentalContract, memberID, shopTypeID) values(?,?,?,?,?,?,?)',
                [this.shopName, this.shopPhone, this.shopDetail, this.openingTime, this.shopRentalContract, this.memberID, this.shopTypeID]
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

    static getShopByMemberID(memberID){
        return db.execute(
            'SELECT * from shop inner JOIN member ON shop.memberID = member.memberID INNER JOIN shoptype ON shop.shopTypeID = shoptype.shopTypeID where shop.memberID=?',
            [memberID]
        )
    }

    static getRentByShop(shopID){
        return db.execute(
            // 'SELECT * FROM shop inner JOIN monthlyrentalfee ON shop.shopID = monthlyrentalfee.shopID INNER JOIN yearlyrent ON shop.shopID = yearlyrent.shopID WHERE shop.shopID=?',
            'SELECT * FROM shop inner JOIN monthlyrentalfee ON shop.shopID = monthlyrentalfee.shopID WHERE shop.shopID=?',
            [shopID]
        )
    }

    static getYearRentByShop(shopID){
        return db.execute(
            // 'SELECT * FROM shop inner JOIN monthlyrentalfee ON shop.shopID = monthlyrentalfee.shopID INNER JOIN yearlyrent ON shop.shopID = yearlyrent.shopID WHERE shop.shopID=?',
            'SELECT * FROM shop inner JOIN yearlyrent ON shop.shopID = yearlyrent.shopID WHERE shop.shopID=?',
            [shopID]
        )
    }

}

module.exports = Shop