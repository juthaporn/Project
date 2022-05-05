import React from 'react';

class AdminShopDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shopName : '',
            shopPhone: '',
            shopDetail: '',
            openingTime: '',
            typeName : '',
            rentDetail: '',
            rentalFee: '',
            year: '',
            shopID : '',
            rentalDetail: '',
            month: '',
            waterUnit: '',
            powerUnit : '',
            electricityBill: '',
            cleaningFee: '',
            wasteDisposalFee: '',
           
        }
}


    render(){
        return(   
                <div class="container">
                  
                        <div class="col-xl-6 col-md-6">
                            <div class="recepies_thumb_1"> 
                                 {/* <img src="img/recepie/recepie_details.png" alt=""> */}
                            </div> 
                        </div>
                        <br/>
                        <div class="card" div>
                        <div class="col-sm-9 col-md-6 col-lg-8 col-xl-10">
                            <div class="recepies_info">
                                <h3>shop name </h3>
                                <p> detail </p>

                                <div class="resepies_details">
                                    <ul>
                                        <li><p>phone     : 30 Mins </p></li>
                                        <li><p>openingTime : Main Dish </p></li>
                                        <li><p>shoptypename :  Dinner, Main, Chicken, Dragon, Phoenix </p></li>
                                        <li><p>yearlyrentrentDetail     : 30 Mins </p></li>
                                        <li><p>rentalFee  : Main Dish </p></li>
                                        <li><p>year:  Dinner, Main, Chicken, Dragon, Phoenix </p></li>
                                        <li><p>shopID      : 30 Mins </p></li>
                                        <li><p>monthlyrentalfee rentalDetail : Main Dish </p></li>
                                        <li><p>monthlyrentalfee month  :  Dinner, Main, Chicken, Dragon, Phoenix </p></li>
                                        <li><p>monthlyrentalfee year : 30 Mins </p></li>
                                        <li><p>monthlyrentalfee waterUnit :  Dinner, Main, Chicken, Dragon, Phoenix </p></li>
                                        <li><p>monthlyrentalfee waterBill : 30 Mins </p></li>
                                        <li><p>monthlyrentalfee powerUnit : 30 Mins </p></li>
                                    </ul>
                                </div>
                                <div class="links">
                                    <a href="#"> <i class="fa fa-facebook"></i> </a>
                                    <a href="#"> <i class="fa fa-twitter"></i> </a>
                                    <a href="#"> <i class="fa fa-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                   
                    </div>
                </div>
                
        )
    }
}

export default AdminShopDetail;