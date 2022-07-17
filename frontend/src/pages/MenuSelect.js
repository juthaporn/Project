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
		  <h5 class="text-left ">หน้ารถเข็น</h5><br/>
		   <td><a href="/Menuselect" class="button button-contactForm btn_4 boxed-btn-data">กลับ</a></td><br/>    
          <div class="row">
		  <div class="col-lg-12 col-sm-6 col-xs-12">
                  <div class="white-box analytics-info">
							<div class="card-body">
							<table class="table table-borderless">
								<tbody>
                {/* <a href="/OrderStatus" class="btn btn-primary">สถานะของอาหาร</a> */}
								<tr>
									<td></td>
									<td><h5>จำนวน</h5></td>
									<td class="text-end"><h5>ราคา</h5></td>
									<td><h5>ยกเลิก</h5></td>
								</tr>
								<tr>
									<td>
									<div class="d-flex mb-2">
										<div class="flex-shrink-0">
										<img src="img/post/post_4.png" alt=""/>
										</div>
										<div class="flex-lg-grow-1 ms-3">
										<h5 ><br/>Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</h5>
										<h5><span class="small">ประเภทอาหาร: ข้าว</span></h5>
										</div>
									</div>
									</td><br/>
									<input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
									<td class="text-end"><h5>50</h5></td>
									<td><button type="cancel" className="nav-link" class='badge badge-danger'>ยกเลิก</button></td>

								</tr>
								<tr>
									<td>
									<div class="d-flex mb-2">
										<div class="flex-shrink-0">
										<img src="img/post/post_3.png" alt=""/>
										</div>
										<div class="flex-lg-grow-1 ms-3">
										<h5 ><br/>Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</h5>
										<h5><span class="small">ประเภทอาหาร: ข้าว</span></h5>
										</div>
									</div>
									</td><br/>
									<input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
									<td class="text-end"><h5>45</h5></td>
									<td><button type="cancel" className="nav-link" class='badge badge-danger'>ยกเลิก</button></td>
								</tr>
								</tbody>
							</table>
							</div>

							<div class="form-group text-center">
							<a href="/Order" class="button button-contactForm btn_4 boxed-btn-data">สั่งซื้อ</a><br/>
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