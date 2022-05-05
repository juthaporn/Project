import React from 'react';

class OrderOwner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orderDate: '',
            orderStatus: '',
            subtotal: '',
            orderDetail: '',
            quantity: '',
            price: '',
            productName : '',
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
                <div class="card-body">
                    <table class="table table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">id </th>
                                    <th scope="col">productName</th>
                                    <th scope="col">detail</th>
                                    <th scope="col">order date</th>
                                    <th scope="col">order status</th>
                                    <th scope="col">subtotal</th>
                                    <th scope="col">orderDetail</th>
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
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    
                                    
                                    </tr>
                                </tbody>
                                </table>
                        </div>
            </div>
            
       
        )
    }
}

export default OrderOwner;