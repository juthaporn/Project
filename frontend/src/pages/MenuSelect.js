import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class MenuSelect extends React.Component{
	constructor(props){
        super(props);
        this.state = {
          data:[]
        }
    }

	componentDidMount(){
		this.getData()
		console.log("productID",this.props.match.params.id) 
	}
	
	getData = () => {
            var x = this;
            axios.get("http://localhost:3000/product/getOneProduct/"+this.props.match.params.id).then((res) => {  
				console.log(res.data.data[0])
              this.setState({data: res.data.data[0]});
            //   this.setState({productID: this.state.data[0].productID})
            //   this.setState({productName: this.state.data[0].productName})
            //   this.setState({productPrice: this.state.data[0].productPrice})
		}).catch((error) => {
			console.log(error);
		});
	}

	handleChange = (e) => {
		console.log(e.target.value)
		this.setState({number: e.target.value})
	}

	// handleChange = (e) => {
	// 	this.setState({
	// 	  ...this.state,
	// 	  [e.target.name]: e.target.value
	// 	})
	//   }
  
	
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
		  subtotal: this.props.match.params.subtotal,
		}).then((res) => {  
		  console.log(res.data)
		}).catch(err => {
		  console.log(err)
		}) 
	  }
	  
	//   handleSubmit = (e) => {
	// 	console.log("handleSubmit", this.state)
	// 	e.preventDefault()
	// 	axios.post('http://localhost:3000/orderdetail/createOrderDetail', { 
	// 		orderDetailID: this.state.orderDetailID,
	// 		quantity:this.state.quantity,
	// 		price:this.state.price,
	// 		productID:this.state.productID,
	// 	}).then((res) => {  
	// 	  console.log(res.data)
	// 	}).catch(err => {
	// 	  console.log(err)
	// 	})
	  
	//   }

    render(){
        return(    
              
        <div class ="container"> 
        <br/> 
		<h5 class="text-left ">หน้ารถเข็น</h5><br/>
		<td><a href="/Menu" class="button button-contactForm btn_4 boxed-btn-back">กลับ</a></td><br/>    
        <div class="row">
		
		  	<div class="col-lg-12 col-sm-6 col-xs-12">
                <div class="white-box analytics-info">
					<div class="card-body">
						<table class="table table-borderless">

								<tr>
									<td></td>
									<td><h5>จำนวน</h5></td>
									<td class="text-end"><h5>ราคา</h5></td>
									<td><h5>ยกเลิก</h5></td>
								</tr>
									<tr>
									{/* <form class="form-contact contact_form" onSubmit={this.handleSubmit}>		 */}
									<td><div class="d-flex mb-2">
											<div class="flex-shrink-0" >
												<img src="img/post/post_4.png" alt=""/>
											</div>
											<div class="flex-lg-grow-1 ms-3">
												<h5> {this.state.data.productName}</h5>
												{/* <input name="orderDetailID" class="form-control" onChange={this.handleChange} value={this.state.data.productName} required /> */}
											</div>
										</div>
									</td><br/>
									<input name="quantity"type="number" id="tentacles"  min="1" max="20" onChange={(e) => this.handleChange(e)}></input>
									<td class="text-end"><h5>50</h5></td>
									<td><a href="/Shop"class='badge badge-danger' >ยกเลิก</a></td>
									{/* </form> */}
								</tr>
							</table>

							</div>
							<div class="form-group text-center">
								{/* ห้ามเปลี่ยนนะบรรทัดนี้อะ */}
								<Link to={"/Order/"+this.props.match.params.id+"/"+this.state.number} class="button button-contactForm btn_4 boxed-btn-menu" >สั่งซื้อ</Link>
							</div><br/>
						</div>
					</div>
					 
					
				</div>
					
          {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
          </div>
          
        )
    }
}

export default MenuSelect;