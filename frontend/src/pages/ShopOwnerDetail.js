import React from 'react';

class ShopOwnerDetail extends React.Component{
    render(){
        return( 
            
            <div class="recepie_details_area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-md-6">
                        <div class="recepies_thumb1">
                            {/* <img src="img/recepie/recepie_details.png" alt=""> */}
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                        <div class="recepies_info">
                            <h3>Dragon tiger phoenix</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
    
                            <div class="resepies_details">
                                <ul>
                                    <li><p><strong>name</strong> :  </p></li>
                                    <li><p><strong>phone</strong> :</p></li>
                                    <li><p><strong>openingTime</strong> :  </p></li>
                                    <li><p><strong>typename</strong> :  </p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        )
    }
}

export default ShopOwnerDetail;