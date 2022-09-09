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

	}

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
										<h5 className='box-title'>{this.state.name}</h5>
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
									
									<td><h5><a>จำนวนรายการทั้งหมด</a></h5></td>
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
							<div class="form-group text-center">
									{/* <Link to={"/OrderStatus/"+this.props.match.params.id+"/"+this.state.number} class="button button-contactForm btn_3 boxed-btn-menu">สถานะของอาหาร</Link> */}
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