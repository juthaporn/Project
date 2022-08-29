import React from 'react';
import axios from 'axios';

class MenuSelect extends React.Component{
	constructor(props){
        super(props);
        this.state = {
          productName: '',
          productPrice:'',
          data:[]
        }
    }
				componentDidMount(){
					this.getData()
					console.log("item",this.props.match.params.id) //
				}
				getData = () => {
					    var x = this;
					    axios.get("http://localhost:3000/product/findById/"+this.props.match.params.id).then((res) => {  
					      console.log(this.state.data[0])
					      this.setState({data: res.data.data[0]});
					      this.setState({productID: this.state.data[0].productID})
					      this.setState({productName: this.state.data[0].productName})
					      this.setState({productPrice: this.state.data[0].productPrice})
					      // x.setState({data: res.data.data});
					    }).catch((error) => {
					      console.log(error);
					    });
					  }
				// getData = () => {
				// 	var x = this;
				// 	axios.get("http://localhost:3000/product/getProductByShop/"+this.props.match.params.id).then((res) => {  
				// 	console.log(this.state.data[0])
				// 	this.setState({data: res.data.data[0]});
				// 	this.setState({shopID: this.state.data[0].shopID})
				// 	this.setState({productName: this.state.data[0].productName})
				// 	this.setState({productPrice: this.state.data[0].productPrice})
				// 	// x.setState({data: res.data.data});
				// 	}).catch((error) => {
				// 	console.log(error);
				// 	});
				// }
    render(){
        return(    
              
          <div class ="container"> 
          <br/> 
		  <h5 class="text-left ">หน้ารถเข็น</h5><br/>
		   <td><a href="/Menu" class="button button-contactForm btn_4 boxed-btn-back">กลับ</a></td><br/>    
          <div class="row">
		  {
                this.state.data?.map(product => (
		  <div class="col-lg-12 col-sm-6 col-xs-12">
                  <div class="white-box analytics-info">
							<div class="card-body">

							<table class="table table-borderless">
								<tbody>
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
											<h5>{product.productName}</h5>
											<h5>{product.productPrice}</h5>
							
										</div>
									</div>
									</td><br/>
									<input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
									<td class="text-end"><h5>50</h5></td>
									<td><a href="/Shop"class='badge badge-danger' >ยกเลิก</a></td>

								</tr>
								</tbody>
							</table>
							</div>

							<div class="form-group text-center">
							<a href="/Order" class="button button-contactForm btn_4 boxed-btn-data">สั่งซื้อ</a><br/>
							</div>
						</div>
					</div>
					 ))
					}
				</div>
					
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          
        )
    }
}

export default MenuSelect;