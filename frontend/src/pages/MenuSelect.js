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
          <br/>   
          <div class="row">
		  <div class="col-lg-12 col-sm-6 col-xs-12">
                  <div class="white-box analytics-info">
							<div class="card-body">
							<table class="table table-borderless">
								<tbody>
                {/* <a href="/OrderStatus" class="btn btn-primary">สถานะของอาหาร</a> */}
								<tr>
									<td></td>
									<td>จำนวน</td>
									<td class="text-end">ราคา</td>
								</tr>
								<tr>
									<td>
									<div class="d-flex mb-2">
										<div class="flex-shrink-0">
										<img src="img/post/post_4.png" alt=""/>
										</div>
										<div class="flex-lg-grow-1 ms-3">
										<h6 ><br/>Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</h6>
										<span class="small">ประเภทอาหาร: ข้าว</span>
										</div>
									</div>
									</td>
									<input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
									<td class="text-end">50</td>
								</tr>
								<tr>
									<td>
									<div class="d-flex mb-2">
										<div class="flex-shrink-0">
										<img src="img/post/post_3.png" alt=""/>
										</div>
										<div class="flex-lg-grow-1 ms-3">
										<h6 ><br/>Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</h6>
										<span class="small">ประเภทอาหาร: ข้าว</span>
										</div>
									</div>
									</td>
									<input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
									<td class="text-end">45</td>
								</tr>
								</tbody>
							</table>
							</div>
						</div>
					</div>
 					 </div>
            
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          
        )
    }
}

export default MenuSelect;