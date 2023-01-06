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
                // 'insert into order (orderStatus, subtotal, memberID, shopID) values(?,?,?,?,?,?)',
                'INSERT INTO `order`(`orderStatus`, `subtotal`, `shopID`, `memberID`) VALUES (?,?,?,?)',
                [this.orderStatus, this.subtotal, this.memberID, this.shopID]
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
    static createOrder(orderID){
        return db.execute(
            "insert into orderID (orderDate, orderTime, orderStatus, subtotal, memberID, shopID) values(?,?,?,?,?,?)'", //CURDATE(),CURTIME() วัน,เวลา
            [orderID]
        )
    }

  
    

}

module.exports = Order