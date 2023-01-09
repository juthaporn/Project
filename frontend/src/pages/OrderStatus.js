import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class OrderStatus extends React.Component{
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
				componentDidMount(){
					this.getData()
						console.log("orderID",this.props.match.params.product)
					}

					etData = () => {
						var x = this;
						axios.get("http://localhost:3000/order/getOrder"+this.props.match.params.id).then((res) => {  
								console.log(res.data.data[0])
							  this.setState({data: res.data.data[0]});
							  this.setState({orderID: this.state.data.orderID})
							  this.setState({subtotal: this.state.data.subtotal})
							  this.setState({orderStatus: this.state.data.orderStatus})
							}).then((res) => {  
								axios.get('http://localhost:3000/orderdetail/getOrderDetail'+this.props.match.params.id).then((res) => {  
								  console.log(res.data.data[0])
								  this.setState({productName: this.state.data.productName})
								  this.setState({price: this.state.data.price})
								  this.setState({quantity: this.state.data.quantity})
								 
								  }).catch((error) => {
									console.log(error);
								  });
							  
					}).catch((error) => {
				
						console.log(error);
					});
					
				}
			
				

    render(){
        return(   
                   
            <div class ="container"> 
            <br/>   
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css"/>
			<div class="row">
				<div class="col-lg-12">
						<div class="card mb-3">
						<div class="p-4 text-center text-white text-lg bg-dark rounded-top"><h4 span class="text-uppercase">สถานะคำสั่งซื้อของออร์เดอร์ </h4><h4 class="text-medium">{this.state.orderID}</h4></div>
						
						<div class="card-body">
							<div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
							<div class="step">
								<div class="step-icon-wrap">
								<div class="step-icon"><i class="pe-7s-more"></i></div>
								</div>
								<h4 class="step-title">รับอาหาร  {this.state.orderStatus} </h4>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>

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
										<h5 class="box-title">{this.state.productName}</h5>
										</div>
									</div>
									</td>
									<h5><td>{this.props.match.params.number}</td></h5>
									<td></td>
									<h5><td class="text-end">{(this.props.match.params.number * this.state.price)}</td></h5>
								</tr>
								
								</tbody>
								<tfoot>
								<tr>
									
									<td><h5><a href="/Order" >จำนวนรายการทั้งหมด</a></h5></td>
									<td></td>
									<td></td>
									<h5><td >{this.state.data.quantity} รายการ</td></h5>
								</tr>
								<tr class="fw-bold">
								
									<h5><td colspan="2">รวมทั้งหมด</td></h5>
									<td></td>
									<td></td>
									<h5><td class="text-end">{this.state.data.subtotal} บาท</td></h5>
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

export default OrderStatus;