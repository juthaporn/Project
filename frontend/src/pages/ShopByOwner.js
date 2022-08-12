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

      handleDelete = (shopID) => {
        console.log(shopID);
        axios.get('http://localhost:3000/shop/deleteShop/'+ shopID)
        .then((res) => {
          console.log(res.data);
          this.getData()
        }).catch(error => {
          console.log(error);
        });
      }

    render(){
        return(
            <div class="container">
                <div class="box-title-head">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="title-head text-center">
                                ร้านค้า    
                            </div>
                        </div>
                    </div>
                </div>
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
                            <Link to={"/AddShop/"+this.state.memberID} class="button button-contactForm btn_4 boxed-btn-addShop">เพิ่มร้านค้า</Link>
                        </td> 
                    </table>
                    <div class="row">
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
                                    <Link to={"/AddYearRent/"+item.shopID} class="button button-contactForm btn_4 boxed-btn-add">เพิ่มค่าเช่าร้าน</Link>
                                    <Link to={"/YearRent/"+item.shopID} class="button button-contactForm btn_4 boxed-btn-add">ดูค่าเช่าร้าน</Link>
                                    <Link to={"/AddRent/"+item.shopID} class="button button-contactForm btn_4 boxed-btn-add">เพิ่มค่าน้ำ-ค่าไฟ</Link>
                                    <Link to={"/Rent/"+item.shopID} class="button button-contactForm btn_4 boxed-btn-add">ดูค่าน้ำ-ค่าไฟ</Link>
                                    <button type="submit" class="button button-contactForm btn_4 boxed-btn-del" onClick={(e) => this.handleDelete(item.shopID)}>ลบ</button>
                                </div>
                            ))
                        }
                    </div>   
                </div>
            </div>
        )
    }
}

export default ShopByOwner;