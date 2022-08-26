import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          productName: '',
          productPrice:''
        }
    }
   

    componentDidMount(){
        this.getData()
      }
  
      getData = () => {
        var x = this;
        axios.get("http://localhost:3000/getProduct").then((res) => {  
          this.setState({data: res.data.data[0]});
          console.log("shop",this.state.data)
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
                                    this.state.data?.map(product => (
                  <div class="col-xl-4 col-lg-4 col-md-6">
                      <div class="single_recepie text-center">
                          <div class="recepie_thumb">
                              <img src="img/recepie/recpie_1.png" alt=""/>
                          </div>
                      
                                  <h5>{product.productName}</h5>
                                  <h5>{product.productPrice}</h5>
                          <h5><a href="/MenuSelect" class='badge badge-primary'>เพิ่มไปยังรถเข็น</a></h5>
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