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
	
	componentDidMount(){
		this.getData()
		console.log("productID",this.props.match.params.product) 
		console.log("number", this.props.match.params.number)
		console.log("MemberID",this.props.match.params.id)	

	}

	getData = () => {
		var x = this;
		axios.get("http://localhost:3000/product/getOneProduct/"+this.props.match.params.id).then((res) => {  
			console.log(res.data.data[0])
		  this.setState({data: res.data.data[0]});
		  this.setState({productID: this.state.data[0].productID})
		  this.setState({productName: this.state.data[0].productName})
		  this.setState({productPrice: this.state.data[0].productPrice})
	}).catch((error) => {
		console.log(error);
	});
}

handleChange = (e) => {
	console.log(e.target.value)
	this.setState({number: e.target.value})

}

handleSubmit = (e) => {
	console.log("handleSubmit", this.state)
	e.preventDefault()
	axios.post('http://localhost:3000/order/createOrder', { 
	  orderDate: this.state.orderDate,
	  orderName:this.state.orderName,
	  shopID: this.props.match.params.shopID,
	  orderID: this.props.match.params.orderID,
	  memberID: this.props.match.params.memberID,
	  orderStatus: this.props.match.params.orderStatus,
	  subtotal: this.state.subtotal,
	}).then((res) => {  
	  console.log(res.data)
	}).catch(err => {
	  console.log(err)
	}) 
  }

	// getData = () => {
	// 	axios.get("http://localhost:3000/product/getOneProduct/25" + this.props.match.params.product)
	// 	.then(res => {
	// 		console.log(res.data.data[0])
	// 		this.setState({product: res.data.data[0]})
	// 		this.setState({name: this.state.product.productName})
	// 		// console.log(this.state.product.productPrice)
	// 		this.setState({price: this.state.product.productPrice})
	// 	})
	// }

    render(){
        return(   
         
          <div class ="container">
			<br/>   
		   <h5 class="text-left ">หน้าสถานะของรายการอาหาร</h5><br/>
		   <td><a href="/Shop" class="button button-contactForm btn_3 boxed-btn-home">หน้ารายการอาหาร</a></td><br/>
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
										{/* <h5 className='box-title'>{this.state.data.productName}</h5> */}
										</div>
									</div>
									</td>
									<h5><td>{this.props.match.params.number}</td></h5>
									<td></td>
									{/* <h5><td class="text-end">{(this.props.match.params.number * this.state.data.productPrice)}</td></h5> */}
								</tr>
								
								</tbody>
								<tfoot>
								<tr>
									
									<td><h5><a>จำนวนรายการทั้งหมด</a></h5></td>
									<td></td>
									<td></td>
									<h5><td >{this.props.match.params.number} รายการ</td></h5>
									<h2>{this.state.datetime}</h2>
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
							<div class="form-group text-center">
									<Link to={"/OrderStatus/"+this.props.match.params.id+"/"+this.state.number} class="button button-contactForm btn_3 boxed-btn-menu">สถานะของอาหาร</Link>
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