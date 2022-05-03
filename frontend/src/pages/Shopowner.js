import React from 'react';

class ShopOwner extends React.Component{
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
                                    <li><p><strong>Rating</strong> : <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> </p></li>
                                    {/* <li><p><strong>Time</strong> : 30 Mins </p></li>
                                    <li><p><strong>Category</strong> : Main Dish </p></li> */}
                                    <li><p><strong>openingTime</strong> :  Dinner, Main, Chicken, Dragon, Phoenix </p></li>
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
            
      
                    <div class="card-body">
                    <table class="table table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">oder </th>
                                    <th scope="col">order date</th>
                                    <th scope="col">product</th>
                                    <th scope="col">status</th>
                                    <th scope="col">detail</th>
                                    <th scope="col">price</th>
                                    <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    
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