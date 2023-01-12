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
    static getOrder(orderID){
        return db.execute(
            'select * from order where orderID = ?',
            // 'select orderID, orderStatus,orderTime,subtotal FROM order'
            [orderID]
        )
    }

    static updateStatus(orderID, status){
        return db.execute(
            'UPDATE `order` SET `orderStatus`=? where orderID = ?',
            // 'select orderID, orderStatus,orderTime,subtotal FROM order'
            [status, orderID]
        )
    }
    static getOrderByshopID(shopID){
        console.log("get data");
        var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        let ndate = [year, month, day].join('-');
        console.log("select * FROM `order` o join orderdetail od on o.orderID=od.orderID join product p on p.productID=od.productID where o.shopID = ? and o.orderStatus != 'เสร็จสิ้น' and o.orderdate like('%"+ndate+"%') order by o.orderID asc")
        return db.execute(
            "select * FROM `order` o join orderdetail od on o.orderID=od.orderID join product p on p.productID=od.productID where o.shopID = ? and o.orderStatus != 'เสร็จสิ้น' and o.orderdate like('%"+ndate+"%') order by o.orderID asc",
            [shopID]
        )
    }

    static getTopProduct(){
        return db.execute(
            // 'SELECT SUM(subtotal) total FROM `order`WHERE shopID = ?',
            // [shopID]
            'WITH top3_counts AS ( SELECT o.shopID, od.productID, count(od.productID) as count FROM orderdetail od INNER JOIN `order` o ON od.orderID = o.orderID GROUP BY o.shopID, od.productID ORDER BY o.shopID, count DESC ) SELECT shopID, productID, count FROM top3_counts GROUP BY shopID, productID ORDER BY shopID, count DESC LIMIT 3'
        )
    }

}

module.exports = Order