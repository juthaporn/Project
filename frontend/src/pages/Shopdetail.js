import React from 'react';

class ShopDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shopName: '',
            shopPhone: '',
            shopDetail: '',
            openingTime: ''
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
                            <p>shopDetail</p>
    
                            <div class="resepies_details">
                                <ul>
                                    <li><p><strong>shopPhone</strong> :  Main Dish </p></li>
                                    <li><p><strong>openingTime</strong> : Main Dish </p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

       
        )
    }
}

export default ShopDetail;