const db = require('../util/database');

class Order{

    constructor(orderID, orderDate, orderTime, orderStatus, subtotal, memberID, shopID){
        this.orderID = orderID;
        this.orderDate = orderDate;
        this.orderTime = orderTime;
        this.orderStatus = orderStatus;
        this.subtotal = subtotal;
        this.memberID = memberID;
        this.shopID = shopID;
    }

    static findAll(){
        return db.execute("select * from order");
    }

    save(){
        if(this.orderID){
            return db.execute(
                'update order set orderDate=?, orderTime=?, orderStatus=?, subtotal=?, memberID=?, shopID=? where orderID = ?',
                [this.orderDate, this.orderTime, this.orderStatus, this.subtotal, this.memberID, this.shopID, this.orderID]
            );
        }else{
            return db.execute(
                'insert into order (orderDate, orderTime, orderStatus, subtotal, memberID, shopID) values(?,?,?,?,?,?)',
                [this.orderDate, this.orderTime, this.orderStatus, this.subtotal, this.memberID, this.shopID]
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