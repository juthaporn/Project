const db = require('../util/database');

class yearRent{

    constructor(rentID, rentDetail, rentalFee, shopID){
        this.rentID = rentID;
        this.rentDetail = rentDetail;
        this.rentalFee = rentalFee;
        this.shopID = shopID;
    }

    static findAll(){
        return db.execute("select * from yearlyrent");
    }

    save(){
        if(this.rentalID){
            return db.execute(
                'update yearlyrent set rentDetail=?, rentalFee=?, shopID=? where rentID = ?',
                [this.rentID, this.rentDetail, this.rentalFee, this.shopID, this.rentID]
            );
        }else{
            return db.execute(
               'insert into yearlyrent (rentDetail, rentalFee,shopID) values(?,?,?)',
               [this.rentDetail, this.rentalFee, this.shopID]
            );
        }
    }

    static findById(rentaID){
        return db.execute(
            'select * from yearlyrent where rentID= ?',
            [rentID]
        );
    }

}

module.exports = yearRent