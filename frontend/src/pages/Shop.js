import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          shopName: '',
          openingTime:''
        }
    }

    componentDidMount(){
        this.getData()
      }
  
      getData = () => {
        var x = this;
        axios.get("http://localhost:3000/shop/getAllShop").then((res) => {
          this.setState({data: res.data.data[0]});
          console.log("owner",this.state.data)
          // x.setState({data: res.data.data});
        }).catch((error) => {
          console.log(error);
        });
      }

    render(){
        return( 
          <div class ="container"> 
          <br/>
           <div class="col-lg-12 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
						<div class=" text-center "><h5><span >ร้านอาหาร</span></h5></div>
				</div>
            </div>
           <div class="recepie_area">
          <div class="container">
              <div class="row">
              { this.state.data?.map(shop => (
                  <div class="col-xl-4 col-lg-4 col-md-6">
                      <div class="single_recepie text-center">
                          <div class="recepie_thumb">
                              <img src="img/recepie/recpie_1.png" alt=""/>
                          </div>
                               
                          <h5>{shop.shopName}</h5>
                          <h5>{shop.openingTime}</h5>
                          {/* <h5><a href="/Menu" class='badge badge-primary'>ไปยังร้านค้า</a></h5> */}
                          <Link to={"/Menu/"+shop.shopID} class="button button-contactForm btn_4 boxed-btn-add">ไปยังร้านค้า</Link>
                      </div>
                       
                  </div>
                  ))
                }
              </div>
          </div>
      </div>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      </div>
        )
    }
}

export default Shop;