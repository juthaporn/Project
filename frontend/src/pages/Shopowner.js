import React from 'react';

class ShopOwner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shopName: '',
            productName : '',
            productPrice: ''
        }
}


    render(){
        return( 
            <div class="recepie_details_area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-md-6">
                        <div class="recepies_thumb">
                        <img class="card-img" src="img/video/2.png" alt="" />
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                        <div class="recepies_info">
                            <h3>Dragon tiger phoenix</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
    
                            {/* <div class="resepies_details">
                                <ul>
                                    <li><p><strong>productName</strong> : <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> </p></li>
                                    <li><p><strong>productPrice</strong> :  Dinner, Main, Chicken, Dragon, Phoenix </p></li>
                                </ul>
                            </div> */}
                            <div class="links">
                                <a href="#"> <i class="fa fa-facebook"></i> </a>
                                <a href="#"> <i class="fa fa-twitter"></i> </a>
                                <a href="#"> <i class="fa fa-linkedin"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            
      
                    <div class="card-body">
                    <table class="table table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">productName </th>
                                    <th scope="col">productPrice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    </tr>
                                </tbody>
                                </table>
                        </div>
            </div>
            </div>
            
        )
    }
}

export default ShopOwner;