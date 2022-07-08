import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


class ShopByOwner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            name: "",
            phone: "",
            memberID: ""
        }

    }

    componentDidMount(){
        this.getData()
        console.log("MemberID",this.props.match.params.id)
    }
  
      getData = () => {
        var x = this;
        axios.get("http://localhost:3000/shop/getShopByMemberID/"+this.props.match.params.id).then((res) => {
          this.setState({data: res.data.data[0]});
          this.setState({memberID: this.state.data[0].memberID})
          this.setState({name: this.state.data[0].name})
          this.setState({phone: this.state.data[0].phone})
        //   console.log("admin",this.state.data[0].name)
            console.log(this.state.name)
          // x.setState({data: res.data.data});
        }).catch((error) => {
          console.log(error);
        });
      }


    render(){
        // const style1 = {
        //     background: "#F0FFFF"
        // }
        return(
            <div class="container">
                {/* container-fluid */}
                <div class="box-title-head">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="title-head text-center">
                                ร้านค้า    
                            </div>
                        </div>
                    </div>
                </div>
        
                {/* <br /> */}
                {/* <a href="/admin" class="line_btn" style={style1}>ย้อนกลับ</a> */}
                <div>

                    <table class="table table-borderless">
                            <td width="30%">
                                <br />
                                <h5>ผู้ประกอบการ : {this.state.name}</h5>
                            </td>
                            <td>
                            <br />
                                <h5>เบอร์โทร : {this.state.phone}</h5>
                            </td>
                            <td>
                                {/* <Link to={"/AddRent"} class="button button-contactForm btn_4 boxed-btn-add">เพิ่มค่าเช่าร้าน</Link> */}
                                {/* {this.state.data?.map(item => ( */}
                                    {/* <br /> */}
                                    <Link to={"/AddShop/"+this.state.memberID} class="button button-contactForm btn_4 boxed-btn-addShop">เพิ่มร้านค้า</Link>
                                    {/* )) */}
                                {/* } */}
                            </td> 
                    </table>
                    <div class="row">
                        {/* <div class="col-lg-4">
                            <br />
                            <img class="card-img" src="img/cofe.jpg" alt="" />
                        </div> */}

                        {
                            this.state.data?.map(item => (
                                <div class="col-lg-12 box">
                                    <div class="f-card">
                                        <strong>ชื่อร้าน</strong> : {item.shopName}
                                    </div>
                                    <div class="f-card">
                                        <strong>เบอร์โทรศัพท์</strong> : {item.shopPhone}
                                    </div>
                                    <div class="f-card">
                                        <strong>คำอธิบายร้านค้า</strong> : {item.shopDetail}
                                    </div>
                                    <div class="f-card">
                                        <strong>เวลาเปิด-ปิด</strong> : {item.openingTime}
                                    </div>
                                    <div class="f-card">
                                        <strong>ประเภทร้านค้า</strong> : {item.typeName}
                                    </div>
                                    <div class="f-card">
                                        <strong>สัญาเช่าร้าน</strong> : {item.shopRentalContract}
                                    </div>
                                    <Link to={"/AddRent/"+item.shopID} class="button button-contactForm btn_4 boxed-btn-add">เพิ่มค่าเช่าร้าน</Link>
                                    <button type="submit" class="button button-contactForm btn_4 boxed-btn-del">ลบ</button>
                                </div>
                                
                            ))
                        }
                        </div>
                        {/* <table>
                            <td width="40%"></td>
                            <td><Link to="/admin" class="button button-contactForm btn_4 boxed-btn-btn">ย้อนกลับ</Link>&nbsp;&nbsp;</td>
                            <td></td>
                            <td width="30%"></td>
                        </table> */}
                   
                </div>
                {/* </div> */}
            </div>
        )
    }
}

export default ShopByOwner;