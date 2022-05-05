import React from 'react';

class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productName: '',
            productPrice: '',
            orderDetail: '',
            quantity: '',
            orderDate:'',
            subtotal:''
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
                                  <h3>order</h3>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
            <br/>
            <div class="card">
                <h6 class="card-header">คำสังซื้อ</h6>
                <div class="card-body">
                    <h6 class="card-title">Product name :</h6>
                    <h6 class="card-title">orderDetail :</h6>
                    <h6 class="card-title">productPrice : </h6>
                    <h6 class="card-title">orderDate :</h6>
                    <h6 class="card-title">subtotal :</h6>
                    <h6 class="card-title">orderDate: </h6>
                   
                </div>
            </div>
            </div>
            
       
        )
    }
}

export default Order;