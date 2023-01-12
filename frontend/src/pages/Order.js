import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          data:[],
		  memberID: localStorage.getItem("memberID")
			
        }
}
	
componentDidMount(){
	this.getData()
	console.log("MemberID",this.state.memberID)

}
getData = () => {
	var x =this;
	axios.get("http://localhost:3000/order/getOrderBymemberID/"+this.state.memberID).then((res) => {
		console.log(res.data.data[0])
		this.setState({ data: res.data.data [0]});
		this.setState({memberID: this.state.data[0].memberID})
        this.setState({productName: this.state.data[0].productName})
        this.setState({productPrice: this.state.data[0].productPrice})
		this.setState({subtotal: this.state.data[0].subtotal})
		this.setState({quantity: this.state.data[0].quantity})
		console.log(this.state.name)
	  }).catch((error) => {
		  console.log(error);
	  });
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
							{
                					this.state.data?.map(item => (
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
										<h5><td>{item.productName}</td></h5>
										</div>
									</div>
									</td>
									<h5><td>{item.productPrice}</td></h5>
									<td></td>
								</tr>
								
								</tbody>
								<tfoot>
								<tr>
									<td><h5><a>จำนวนรายการทั้งหมด</a></h5></td>
									<td></td>
									<td></td>
									<h5><td >{item.quantity} รายการ</td></h5>
								</tr>
								<tr class="fw-bold">
								
									<h5><td colspan="2">รวมทั้งหมด</td></h5>
									<td></td>
									<td></td>
									<h5><td class="text-end">{item.subtotal} บาท</td></h5>
								</tr>
								</tfoot>
									
							</table>
							))}
							</div>
							
							<div class="form-group text-center">
									<Link to={"/OrderStatus/"+this.state.memberID+"/"+this.state.subtotal} class="button button-contactForm btn_3 boxed-btn-menu">สถานะของอาหาร</Link>
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