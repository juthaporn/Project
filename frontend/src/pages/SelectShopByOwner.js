import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SelectShopByOwner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            phone: '',
            memberID: ''
        }
    }

    componentDidMount(){
        this.getData()
      }
  
      getData = () => {
        var x = this;
        axios.get("http://localhost:3000/shop/getOneShop/3").then((res) => {
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
                                    <h5 class="box-title">ร้านทั้งหมด</h5>
                                </div>
                </div>
                <div class="col-lg-12 col-sm-6 col-xs-12">
                                <div class="white-box analytics-info">
                                <img src="img/post/post_10.png" alt=""/><br/>
                                <br/><h3 class="box-title">ชื่อร้าน</h3>
                                {
                                    this.state.data?.map(shop => (
                                        <tr>
                                            <td>{shop.shopName}</td>
                                        </tr>
                                    ))
                                }
                                </div>
                </div>
                <div class="col-lg-12 col-sm-6 col-xs-12">
                                <div class="white-box analytics-info">
                                <img src="img/post/post_8.png" alt=""/><br/>
                                <br/><h3 class="box-title">ชื่อร้าน</h3>
                                </div>
                </div>
	        </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          
        )
    }
}

export default SelectShopByOwner;