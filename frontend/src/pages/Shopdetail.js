import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShopDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shopName: '',
            openingTime: ''
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

            <div class="container">
                <br/>
                <div class="row align-items-center">
                    <div class="col-xl-6 col-md-6">
                        <div class="recepies_thumb1">
                            <img class="card-img" src="img/recepie/recepie_details.png" alt="" />
                        </div>
                    </div>
                    {
                                    this.state.data?.map(shop => (
                    <div class="col-xl-6 col-md-6">
                        <div class="recepies_info">
                           
                                    <h5>{shop.shopName}</h5>
                                    <h5>{shop.openingTime}</h5>
                            <div class="resepies_details">
                                <ul>
                                    <li><p><strong>shopPhone</strong> :  Main Dish </p></li>
                                    <li><p><strong>openingTime</strong> : Main Dish </p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     ))
                    }
                </div>
               
            </div>

       
        )
    }
}

export default ShopDetail;