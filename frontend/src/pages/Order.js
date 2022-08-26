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
			// componentDidMount(){
			// 	this.getData()
			// }

			// getData = () => {
			// 	var x = this;
			// 	axios.get("http://localhost:3000/shop/getAllShop").then((res) => {
			// 	this.setState({data: res.data.data[0]});
			// 	console.log("owner",this.state.data)
			// 	// x.setState({data: res.data.data});
			// 	}).catch((error) => {
			// 	console.log(error);
			// 	});
			// }

    render(){
        return(   
         
          <div class ="container">
			<br/>   
			<a href="/OrderStatus" class="button button-contactForm btn_3 boxed-btn-data">สถานะของอาหาร</a>
			<a href="/Shop" class="button button-contactForm btn_3 boxed-btn-data">หน้ารายการอาหาร</a>
		   <h5 class="text-left ">หน้าสถานะของรายการอาหาร</h5><br/>
		   
		   <div class="row">
						<div class="col-lg-12">
						<div class="card mb-4">
							<div class="card-body">
							<table class="table table-borderless">
								<tbody>
								<tr>
									<td></td>
									<h5><td>จำนวน</td></h5>
									<td></td>
									<h5><td class="text-end">ราคา</td></h5>
								</tr>
								<tr>
									<td>
									<div class="d-flex mb-2">
										<div class="flex-shrink-0">
										<img src="img/post/post_4.png" alt=""/>
										</div>
										<div class="flex-lg-grow-1 ms-3">
										<h5 class="box-title">Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</h5>
										<h5 ><span class="small">ประเภทอาหาร: ข้าว</span></h5>
										</div>
									</div>
									</td>
									<h5><td>1</td></h5>
									<td></td>
									<h5><td class="text-end">50</td></h5>
								</tr>
								
								</tbody>
								<tfoot>
								<tr>
									
									<td><h5><a>จำนวนรายการทั้งหมด</a></h5></td>
									<td></td>
									<td></td>
									<h5><td >2 รายการ</td></h5>
								</tr>
								<tr class="fw-bold">
								
									<h5><td colspan="2">รวมทั้งหมด</td></h5>
									<td></td>
									<td></td>
									<h5><td class="text-end">95 บาท</td></h5>
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