import React from 'react';

class OrderStatus extends React.Component{

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
                <h5 class="card-header">สถานะคำสังซื้อ</h5>
                <div class="card-body">
                    <h5 class="card-title">สถานะคำสังซื้อ id</h5>
                    <h6 class="card-title">สถานะ </h6>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            </div>
            
       
        )
    }
}

export default OrderStatus;