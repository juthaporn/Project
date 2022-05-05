import React from 'react';

class MonthlyRentalfee extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rentalDetail: '',
            month: '',
            year: '',
            waterUnit: '',
            waterBill:'',
            powerUnit:'',
            electricityBill:'',
            cleaningFee:'',
            wasteDisposalFee:'',
            shopName :''
        }
}
    render(){
        return(   
            <div class="container">
            <br/>
            <div class="row align-items-center">
                <div class="col-xl-6 col-md-6">
                    <div class="recepies_thumb1">
                        <img class="card-img" src="img/recepie/recepie_details.png" alt="" />
                    </div>
                </div>
                <div class="col-xl-6 col-md-6">
                    <div class="recepies_info">
                        <h3>shopName</h3>

                                <div class="resepies_details">
                                    <ul>
                                        <li><p> rentalDetail : Main Dish </p></li>
                                        <li><p> month  :  Dinner, Main, Chicken, Dragon, Phoenix </p></li>
                                        <li><p> year : 30 Mins </p></li>
                                        <li><p> waterUnit :  Dinner, Main, Chicken, Dragon, Phoenix </p></li>
                                        <li><p> waterBill : 30 Mins </p></li>
                                        <li><p> powerUnit : 30 Mins </p></li>
                                        <li><p> electricityBill : 30 Mins </p></li>
                                        <li><p> cleaningFee :  Dinner, Main, Chicken, Dragon, Phoenix </p></li>
                                        <li><p> wasteDisposalFee : 30 Mins </p></li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                 
                </div>
         
                
        )
    }
}

export default MonthlyRentalfee;