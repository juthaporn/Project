const db = require('../util/database');

class MonthlyRent{

    constructor(rentalID, rentalDetail, month, year, waterBill, electricityBill, cleaningFee, wasteDisposalFee, shopID){
        this.rentalID = rentalID;
        this.rentalDetail = rentalDetail;
        this.month = month;
        this.year = year;
        this.waterBill = waterBill;
        this.electricityBill = electricityBill;
        this.cleaningFee = cleaningFee;
        this.wasteDisposalFee = wasteDisposalFee;
        this.shopID = shopID;
    }

    static findAll(){
        return db.execute("select * from monthlyRentalFee");
    }

    save(){
        if(this.rentalID){
            return db.execute(
                'update monthlyRentalFee set rentalDetail=?, month=?, year=?, waterBill=?, electricityBill=?, cleaningFee=?, wasteDisposalFee=?, shopID=? where rentalID = ?',
                [this.rentalID, this.rentalDetail, this.month, this.year, this.waterBill, this.electricityBill, this.cleaningFee, this.wasteDisposalFee, this.shopID, this.rentalID]
            );
        }else{
            return db.execute(
               'insert into monthlyRentalFee (rentalDetail, month, year, waterBill, electricityBill, cleaningFee, wasteDisposalFee, shopID) values(?,?,?,?,?,?,?,?)',
               [this.rentalDetail, this.month, this.year, this.waterBill, this.electricityBill, this.cleaningFee, this.wasteDisposalFee, this.shopID]
            );
        }
    }

    static findById(rentalID){
        return db.execute(
            'select * from monthlyRentalFee where rentalID= ?',
            [rentalID]
        );
    }

}

module.exports = MonthlyRentnbh