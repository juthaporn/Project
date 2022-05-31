const db = require('../util/database');

class MonthlyRent{

    constructor(rentalID, rentalDetail, month, waterBill, waterUnit, electricityBill, powerUnit, cleaningFee, wasteDisposalFee, shopID){
        this.rentalID = rentalID;
        this.rentalDetail = rentalDetail;
        this.month = month;
        this.waterBill = waterBill;
        this.waterUnit = waterUnit;
        this.electricityBill = electricityBill;
        this.powerUnit = powerUnit;
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
                'update monthlyRentalFee set rentalDetail=?, month=?, waterBill=?, waterUnit=?, electricityBill=?, powerUnit=?, cleaningFee=?, wasteDisposalFee=?, shopID=? where rentalID = ?',
                [this.rentalID, this.rentalDetail, this.month, this.waterBill, this.waterUnit, this.electricityBill, this.powerUnit, this.cleaningFee, this.wasteDisposalFee, this.shopID, this.rentalID]
            );
        }else{
            return db.execute(
               'insert into monthlyRentalFee (rentalDetail, month, waterBill, waterUnit, electricityBill, powerUnit, cleaningFee, wasteDisposalFee, shopID) values(?,?,?,?,?,?,?,?,?)',
               [this.rentalDetail, this.month, this.waterBill, this.waterUnit, this.electricityBill, this.powerUnit, this.cleaningFee, this.wasteDisposalFee, this.shopID]
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