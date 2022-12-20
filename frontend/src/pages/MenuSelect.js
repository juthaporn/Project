import React from 'react';
import axios from 'axios';
// import Time from 'react-time';
import { Link, Redirect } from 'react-router-dom';

class MenuSelect extends React.Component{
	constructor(props){
        super(props);
        this.state = {
          data:[],
		  Date:''
        }
		this.handleSubmit = this.handleSubmit.bind(this)
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
	
	  
	  
	  // eslint-disable-next-line no-dupe-class-members
	  handleSubmit = (e) => {
		console.log("handleSubmit", this.state)
		e.preventDefault()
		axios.post('http://localhost:3000/orderdetail/createOrderDetail', { 
			orderDetailID: this.props.match.params.orderDetailID,
			quantity: this.state.quantity,
			productPrice: this.state.productPrice,
			productID: this.props.match.params.id
		}).then((res) => {  
		  console.log(res.data)
		}).catch(err => {
		  console.log(err)
		})
	  
	  }

    render(){

		if(this.state.redirect){
			return <Redirect to='/order' />
		  }
        return(    
              
        <div class ="container"> 
        <br/> 
		<h5 class="text-left ">หน้ารถเข็น</h5><br/>
		<td><a href="/Menu" class="button button-contactForm btn_4 boxed-btn-back">กลับ</a></td><br/>    
        <div class="row">
		
		  	<div class="col-lg-12 col-sm-6 col-xs-12">
                <div class="white-box analytics-info">
					{/* <form class="form-contact contact_form" onSubmit={this.handleSubmit}> */}
						<div class="card-body">
						
							<table class="table table-borderless">

									<tr>
										<td><h5>เมนู</h5></td>
										<td><h5>จำนวน</h5></td>
										<td class="text-end"><h5>ราคา</h5></td>
										<td><h5>ยกเลิก</h5></td>
									</tr>
										<tr>
										<td>
											<div class="d-flex mb-2">
												{/*<div class="flex-shrink-0" >
													 <img src="img/post/post_4.png" alt=""/>
												</div> */}
												<div class="flex-lg-grow-1 ms-3">
													<h5> {this.state.data.productName}</h5>
													
												</div>
											</div>
										</td><br/>
										<div class="form-group">
										{/* <input type="number" name="subtotal" min="1" max="100" step="1" onChange={this.handleChange} value="1" /> */}
										{/* <input name="subtotal"  onChange={this.handleChange} pattern="^[0-9\s]+$" title="กรุณากรอกข้อมูลเป็นตัวเลข" /> */}
										</div>
										<input name="subtotal"type="number" id="tentacles"  min="1" max="20"onChange={this.handleChange} required/>
										<td class="text-end"><h5>{this.state.data.productPrice}</h5></td>
										<td><a href="/Shop"class='badge badge-danger' >ยกเลิก</a></td>
									</tr>
							</table>
						</div>
					{/* </form> */}
							<div class="form-group text-center">
								{/* ห้ามเปลี่ยนนะบรรทัดนี้อะ */}
								<Link to={"/Order/"+this.props.match.params.id+"/"+this.state.number} type="submit" class="button button-contactForm btn_4 boxed-btn-menu" >สั่งซื้อ</Link>
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