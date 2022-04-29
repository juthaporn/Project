const db = require('../util/database');

class Order{

    constructor(orderID, orderName, orderStatus, memberID, shopID){
        this.orderID = orderID;
        this.orderName = orderName;
        this.orderStatus = orderStatus;
        this.memberID = memberID;
        this.shopID = shopID;
    }

    static findAll(){
        return db.execute("select * from order");
    }

    save(){
        if(this.orderID){
            return db.execute(
                'update order set orderName=?, orderStatus=?, memberID=?, shopID=? where orderID = ?',
                [this.orderName, this.orderStatus, this.memberID, this.shopID, this.orderID]
            );
        }else{
            return db.execute(
                'insert into order (orderName, orderStatus, memberID, shopID) values(?,?,?,?)',
                [this.orderName, this.orderStatus, this.memberID, this.shopID]
            );
        }
    }

    static findById(orderID){
        return db.execute(
            'select * from order where orderID = ?',
            [this.orderID]
        );
    }

    static delById(orderID){
        return db.execute(
            "delete from product where orderID = ?",
            [orderID]
        )
    }

}

module.exports = Order