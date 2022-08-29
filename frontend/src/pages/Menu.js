import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Menu extends React.Component{
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
            console.log("shopID",this.props.match.params.id)
          }

          getData = () => {
            var x = this;
            axios.get("http://localhost:3000/product/getProductByShop/"+this.props.match.params.id).then((res) => {  
              console.log(this.state.data[0])
              this.setState({data: res.data.data[0]});
              this.setState({shopID: this.state.data[0].shopID})
              this.setState({productName: this.state.data[0].productName})
              this.setState({productPrice: this.state.data[0].productPrice})
              // x.setState({data: res.data.data});
            }).catch((error) => {
              console.log(error);
            });
          }

    render(){
        return(    
            <div class ="container">
                <br/>
                <div class="row">
                <div class="col-lg-12 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
						<div class=" text-center "><h5><span >รายการอาหาร</span></h5></div>
				</div>
                <div class="recepie_area">
          <div class="container">
              <div class="row">
              {
                this.state.data?.map(item => (
                  <div class="col-xl-4 col-lg-4 col-md-6">
                      <div class="single_recepie text-center">
                          <div class="recepie_thumb">
                          <img src="img/recepie/recpie_2.png" alt=""/>
                          </div>

                          <h5>{item.productName}</h5>
                          <h5>{item.productPrice} บาท</h5>
                          <Link to={"/MenuSelect/"+item.productID} class="button button-contactForm btn_4 boxed-btn-menu">ไปยังร้านค้า</Link> 
                      </div>
                       
                  </div>
                  ))
                }
              </div>
          </div>
            </div>
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      </div>
    </div>
    </div>
       
       
        )
    }
}

export default Menu;