import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SelectShopByOwner extends React.Component{
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
          // axios.get("http://localhost:3000/shop/getOneShop/:shopID").then((res) => {     
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
            <h5 class="text-left ">หน้าเลือกร้านอาหาร</h5>     
            <div class="row">
              <div class="col-lg-12 col-sm-6 col-xs-12">
                                <div class="white-box analytics-info">
                                    <h5>ร้านทั้งหมด</h5>
                                </div>
                </div>
                <div class="col-lg-12 col-sm-6 col-xs-12">
                {
                                    this.state.data?.map(shop => (
                                <div class="white-box analytics-info">
                                  <img src="img/post/post_10.png" alt=""/><br/><br/>
                                
                                          <tr>
                                            
                                              <h5>{shop.shopName}</h5>
                                              <h5>เบอร์โทร {shop.shopPhone}</h5>
                                              <h5>สัญญา {shop.shopRentalContract}</h5>                          
                                              
                                          </tr>
                                          <table>
                                              <td><Link to={"/Orderowner/"+shop.shopID} class="button btn_4 boxed-btn-order"><h5>ออร์เดอร์</h5></Link></td>
                                              <td></td>
                                              <td></td> 
                                              <td></td>
                                              <td><Link to={"/Shopowner/"+shop.shopID} class="button btn_4 boxed-btn-orderamount"><h5>ยอดการสั่งซื้อ</h5></Link></td>
                                              
                                        </table>
                                          
                                         
                                </div>
                                ))
                              }
                             
                </div>
	        </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          
        )
    }
}

export default SelectShopByOwner;