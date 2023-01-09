import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SelectShopByOwner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          data: [],
          name: "",
          phone: "",
          memberID: localStorage.getItem("memberID")
        }
    }

    componentDidMount(){
        this.getData()
        // memberID: localStorage.getItem("memberID")
        console.log("MemberID",this.state.memberID)
    }

      getData = () => {
        var x = this;
        axios.get("http://localhost:3000/shop/getShopByMemberID/"+this.state.memberID).then((res) => {
            console.log(res.data.data[0])
          this.setState({data: res.data.data[0]});
          this.setState({memberID: this.state.data[0].memberID})
          this.setState({name: this.state.data[0].name})
          this.setState({phone: this.state.data[0].phone})
            console.log(this.state.name)
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
                this.state.data?.map(item => (
                  <div class="white-box analytics-info">
                      <img src="img/post/post_10.png" alt=""/><br/><br/>
                      <tr>
                        <h5>{item.shopName}</h5>
                        <h5>เบอร์โทร {item.shopPhone}</h5>
                        <h5>สัญญา {item.shopRentalContract}</h5>                                              
                      </tr>
                      <table>
                        <td><Link to={"/Orderowner/"+item.shopID} class="button btn_4 boxed-btn-order"><h5>ออเดอร์</h5></Link></td>
                        <td><Link to={"/Shopowner/"+item.shopID} class="button btn_4 boxed-btn-orderamount"><h5>ยอดการสั่งซื้อ</h5></Link></td>
                        <td><Link to={"/AddProduct/"} class="button btn_4 boxed-btn-addmenu"><h5>เพิ่มรายการอาหาร</h5></Link></td>
                      </table>                     
                    </div>
                  ))
                }             
              </div>
	          </div>
          {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
          </div>
      )
    }

}
export default SelectShopByOwner;