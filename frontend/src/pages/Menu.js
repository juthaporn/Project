import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Menu extends React.Component{
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
                <div class="row">
                <div class="col-lg-12 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
						<div class=" text-center "><h5><span >รายการอาหาร</span></h5></div>
				</div>
                <div class="recepie_area">
          <div class="container">
              <div class="row">
              {
                                    this.state.data?.map(shop => (
                  <div class="col-xl-4 col-lg-4 col-md-6">
                      <div class="single_recepie text-center">
                          <div class="recepie_thumb">
                              <img src="img/recepie/recpie_1.png" alt=""/>
                          </div>
                          <tr>
                                              <td>{shop.shopName}</td></tr>
                                            <tr>
                                             <td>{shop.openingTime}</td></tr>
                          <a href="/MenuSelect" class="line_btn">เพิ่มไปยังรถเข็น</a>
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