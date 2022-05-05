import React from 'react';

class MenuSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productName : '',
            orderDetail: '',
            productPrice: '',
            quantity:''
        }
}



    render(){
        return(    
            <div class ="container">    
            <div class="bradcam_area bradcam_bg_1">
                  <div class="container">
                      <div class="row">
                          <div class="col-xl-12">
                              <div class="bradcam_text text-center">
                                  <h3>Menu</h3>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
            <div class="recepie_area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                              
                                <img class="card-img" src="img/recepie/recpie_1.png" alt="" />
                            </div>
                            <h3>productName </h3>
                            <span>orderDetail</span>
                            <span>productPrice</span>
                            <span>quantity</span>
                           
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                            <img class="card-img" src="img/recepie/recpie_6.png" alt="" />
                            </div>
                            <h3>Pure Vegetable Bowl</h3>
                            <span>Appetizer</span>
                            <p>Time Needs: 30 Mins</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
        )
    }
}

export default MenuSelect;