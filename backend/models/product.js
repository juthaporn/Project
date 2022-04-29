const db = require('../util/database');

class Product{

    constructor(productID, productName, productDetail, productPrice, status, typeID, shopID){
        this.productID = productID;
        this.productName = productName;
        this.productDetail = productDetail;
        this.productPrice = productPrice;
        this.status = status;
        this.typeID = typeID;
        this.shopID = shopID;
    }

    static findAll(){
        return db.execute("select * from product");
    }

    save(){
        if(this.productID){
            return db.execute(
                'update product set productName=?, productDetail=?, productPrice=?, status=?, typeID=?, shopID=? where productID = ?',
                [this.productName, this.productDetail, this.productPrice, this.status, this.typeID, this.shopID, this.productID]
            );
        }else{
            return db.execute(
                'insert into product (productName, productDetail, productPrice, status, typeID, shopID) values(?,?,?,?,?,?)',
                [this.productName, this.productDetail, this.productPrice, this.status, this.typeID, this.shopID]
            );
        }
    }

    static findById(productID){
        return db.execute(
            'select * from product where productID = ?',
            [productID]
        );
    }

    static delById(productID){
        return db.execute(
            "delete from product where productID = ?",
            [productID]
        )
    }
}

module.exports = Product