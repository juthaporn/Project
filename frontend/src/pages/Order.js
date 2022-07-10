import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

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
			<br/>  
		   <h5 class="text-left ">หน้าสถานะของรายการอาหาร</h5><br/>
		   <td><a href="/Menuselect" class="button button-contactForm btn_4 boxed-btn-data">กลับ</a></td><br/>
          <div class="row">
		  <div class="col-lg-12 col-sm-6 col-xs-12">
                            <div class="white-box analytics-info">
							<div class="card-body">
							<table class="table table-borderless">
								<tbody>
								<tr>
									<td><a href="/OrderStatus" class="button button-contactForm btn_4 boxed-btn-data">สถานะของอาหาร</a></td>
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
										<br/><h5 class="box-title">Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</h5>
										<h5 ><span class="small">ประเภทอาหาร: ข้าว</span></h5>
										</div>
									</div>
									</td>
									<td></td>
									<td>1</td>
									<td >50</td>
								</tr>
								<tr>
									<td>
									<div class="d-flex mb-2">
										<div class="flex-shrink-0">
										<img src="img/post/post_3.png" alt=""/>
										</div>
										<div class="flex-lg-grow-1 ms-3">
										<br/><h5 class="box-title">Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</h5>
										<h5 ><span class="small">ประเภทอาหาร: ข้าว</span></h5>
										</div>
									</div>
									</td>
									<td></td>
									<td>1</td>
									<td >45</td>
								</tr>
								</tbody>
								<tfoot>
								<tr>
									<h5><td a href="/OrderStatus" >จำนวนรายการทั้งหมด</td></h5>
									<td class="text-danger text-end">2 รายการ</td>
								</tr>
								<tr class="fw-bold">
									<h5><td >รวมทั้งหมด</td></h5>
									<td class="text-end">95 บาท</td>
								</tr>
								</tfoot>
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

export default Order;