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
				// componentDidMount(){
				// 	this.getData()
				// 		console.log("orderID",this.props.match.params.product) 
				// 		// console.log("number", this.props.match.params.number)	

				// 	}

				// 	getData = () => {
				// 		axios.get("http://localhost:3000/orderID/" + this.props.match.params.product)
				// 		.then(res => {
				// 			console.log(res.data.data[0])
				// 			this.setState({product: res.data.data[0]})
				// 			this.setState({name: this.state.product.productName})
				// 			// console.log(this.state.product.productPrice)
				// 			this.setState({price: this.state.product.productPrice})
				// 		})
				// 	}
				componentDidMount(){
					this.getData()
					console.log("orderId",this.props.match.params.id) 
				}
				// componentDidMount(){
				// 	this.getData()
				// 		console.log("productID",this.props.match.params.product) 
				// 		console.log("number", this.props.match.params.number)	
				
				// 	}
				
					getData = () => {
						axios.get("http://localhost:3000/product/getOneProduct/" + this.props.match.params.product)
						.then(res => {
							console.log(res.data.data[0])
							this.setState({product: res.data.data[0]})
							this.setState({name: this.state.product.productName})
							// console.log(this.state.product.productPrice)
							this.setState({price: this.state.product.productPrice})
						})
					}
				

    render(){
        return(   
                   
            <div class ="container"> 
            <br/>   
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css"/>
			<div class="row">
				<div class="col-lg-12">
						<div class="card mb-3">
						<div class="p-4 text-center text-white text-lg bg-dark rounded-top"><h4 span class="text-uppercase">สถานะคำสั่งซื้อของออร์เดอร์ </h4><h4 class="text-medium">34VB5540K83</h4></div>
						
						<div class="card-body">
							<div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
							{/* <div class="step completed">
								<div class="step-icon-wrap">
								<div class="step-icon"><i class="pe-7s-cart"></i></div>
								</div>
								<h4 class="step-title">ยืนยันคำสั่งซื้อ</h4>
							</div>
							<div class="step completed">
								<div class="step-icon-wrap">
								<div class="step-icon"><i class="pe-7s-config"></i></div>
								</div>
								<h4 class="step-title">รอคิว</h4>
							</div>
							<div class="step completed">
								<div class="step-icon-wrap">
								<div class="step-icon"><i class="pe-7s-medal"></i></div>
								</div>
								<h4 class="step-title">กำลังปรุง</h4>
							</div> */}
							<div class="step">
								<div class="step-icon-wrap">
								<div class="step-icon"><i class="pe-7s-home"></i></div>
								</div>
								<h4 class="step-title">รับอาหาร {this.state.name} </h4>
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
										<h5 class="box-title">{this.state.name}</h5>
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
									<h5><td >{this.props.match.params.number} รายการ</td></h5>
								</tr>
								<tr class="fw-bold">
								
									<h5><td colspan="2">รวมทั้งหมด</td></h5>
									<td></td>
									<td></td>
									<h5><td class="text-end">{(this.props.match.params.number * this.state.price)} บาท</td></h5>
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