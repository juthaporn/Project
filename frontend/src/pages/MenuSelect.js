import React from 'react';
import axios from 'axios';

class MenuSelect extends React.Component{
	constructor(props){
        super(props);
        this.state = {
        //   productName: '',
        //   productPrice:'',
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

	handleSubmit = (e) => {
		e.preventDefult()
		axios.post('http://localhost:3000/order/createOrder',{
			orderDate: this.state.orderDate,
        	orderTime: this.state.orderTime,
        	orderStatus: this.state.orderStatus,
        	subtotal: this.state.subtotal,
        	memberID: this.state.memberID,
        	shopID: this.state.shopID
		}).then(res => {
			console.log(res)
			alert('Add Shop Success!')
		  }).catch(err => {
			console.log(err)
		  })
	}

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
							
							{/* <tbody> */}
								<tr>
									<td></td>
									<td><h5>จำนวน</h5></td>
									<td class="text-end"><h5>ราคา</h5></td>
									<td><h5>ยกเลิก</h5></td>
								</tr>
								
								
								{/* {
									this.state.data?.map(item => (  */}
									<tr>		
									<td><div class="d-flex mb-2">
											<div class="flex-shrink-0">
												<img src="img/post/post_4.png" alt=""/>
											</div>
											<div class="flex-lg-grow-1 ms-3">
												{/* <h5>{item.productName}</h5> */}
												{/* <h5>{item.productPrice}</h5> */}
												ยยยยยยย
											</div>
										</div>
									</td><br/>
									<input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
									<td class="text-end"><h5>50</h5></td>
									<td><a href="/Shop"class='badge badge-danger' >ยกเลิก</a></td>
								</tr>
								{/* ))
								}  */}
								
								
								{/* </tbody> */}
								
							</table>
							</div>

							<div class="form-group text-center">
							<a href="/Order" class="button button-contactForm btn_4 boxed-btn-data">สั่งซื้อ</a><br/>
							</div>
						</div>
					</div>
					 
					
				</div>
					
          {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
          </div>
          
        )
    }
}

export default MenuSelect;