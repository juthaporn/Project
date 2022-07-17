const db = require('../util/database');

class YearRent{

    constructor(rentID, rentDetail, year, rentalFee, shopID){
        this.rentID = rentID;
        this.rentDetail = rentDetail;
        this.year = year;
        this.rentalFee = rentalFee;
        this.shopID = shopID;
    }

    static findAll(){
        return db.execute("select * from yearlyrent");
    }

    save(){
        if(this.rentalID){
            return db.execute(
                'update yearlyrent set rentDetail=?, year=?, rentalFee=?, shopID=? where rentID = ?',
                [this.rentID, this.rentDetail, this.year, this.rentalFee, this.shopID, this.rentID]
            );
        }else{
            return db.execute(
               'insert into yearlyrent (rentDetail, year, rentalFee,shopID) values(?,?,?,?)',
               [this.rentDetail, this.year, this.rentalFee, this.shopID]
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

module.exports = YearRent