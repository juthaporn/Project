const db = require('../util/database');

class OrderDetail{

    constructor(orderDetailID , detail, quantity, price, productID, orderID){
        this.orderDetailID  = orderDetailID ;
        this.detail = detail;
        this.quantity = quantity;
        this.price = price;
        this.productID = productID;
        this.orderID = orderID;
    }

    static findAll(){
        return db.execute("select * from orderdetail");
    }

    save(){
        if(this.orderDetailID ){
            return db.execute(
                'update orderdetail set detail=?, quantity=?, price=?, productID =?, orderID=? where orderDetailID  = ?',
                [this.orderDetailID , this.detail, this.quantity, this.price, this.productID, this.orderID, this.orderDetailID]
            );
        }else{
            return db.execute(
                'insert into orderdetail (detail, quantity, price, productID, orderID) values(?,?,?,?)',
                [this.detail, this.quantity, this.price, this.productID, this.orderID]
            );
        }
    }

    static findById(orderDetailID){
        return db.execute(
            'select * from orderdetail where orderDetailID  = ?',
            [this.orderDetailID]
        );
    }

}

module.exports = OrderDetail