import axios from 'axios';
import React from 'react';
// import React, { useState } from "react";

class OrderOwner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      orderID:''
    }
  }

  componentDidMount() {
    this.getData()
    // console.log("MemberID",this.props.match.params.id)
  }

  getData = () => {
    axios.get("http://localhost:3000/order/getOrderByShopID/" + this.props.match.params.id).then((res) => {
      console.log(res.data.data)
      this.setState({ data: res.data.data[0] });
    }).catch((error) => {
      //   console.log(error);
    });
  }

  handleChange = (e) => {
    let value = e.target.value;
    const orderID = e.target.getAttribute("data-orderid");
    axios.get("http://localhost:3000/order/updateOrderStatus/"+orderID+"/"+value).then((res) => {
      this.getData()
    }).catch((error) => {
      //   console.log(error);
    });
  }
  handleDelete = async(orderID) => {
    // console.log(typeID)
    axios.get('http://localhost:3000/order/deleteOrder/' + orderID)
    .then(res => {
      console.log(res.data.message)
      if(res.data.message=='success'){
        alert('ลบข้อมูลสำเร็จ') 
          this.getData()
      }

    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (

      <div class="container"><br />
        <h5 class="text-left ">หน้าออร์เดอร์</h5>
        <h5 class="text-right ">วันที่ 10/5/2565</h5>
        {/* <div class="row">
          <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box analytics-info">
              <h3 class="box-title">จำนวนออร์เดอร์ที่รอคิว</h3>
              <ul class="list-inline two-part">
                <li>
                  <div id="sparklinedash">
                  </div>
                </li>
                <li class="text-right"><i class="ti-arrow-up text-primary"></i> <h5 class="counter text-primary">9 รายการ</h5></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box analytics-info">
              <h3 class="box-title">จำนวนออร์เดอร์ที่กำลังปรุง</h3>
              <ul class="list-inline two-part">
                <li>
                  <div id="sparklinedash2"></div>
                </li>
                <li class="text-right"><i class="ti-arrow-up text-warning"></i> <h5 class="counter text-warning">9 รายการ</h5></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box analytics-info">
              <h3 class="box-title">จำนวนออร์เดอร์ที่เสร็จสมบูรณ์</h3>
              <ul class="list-inline two-part">
                <li>
                  <div id="sparklinedash3"></div>
                </li>
                <li class="text-right"><i class="ti-arrow-up text-success"></i> <h5 class="counter text-success">1 รายการ</h5></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 col-xs-12">
            <div class="white-box analytics-info">
              <h3 class="box-title">จำนวนออร์เดอร์ที่ยกเลิก</h3>
              <ul class="list-inline two-part">
                <li>
                  <div id="sparklinedash3"></div>
                </li>
                <li class="text-right"><i class="ti-arrow-up text-danger"></i> <h5 class="counter text-danger">9 รายการ</h5></li>
              </ul>
            </div>
          </div>
        </div> */}
        <br />
        <div class="row">
          <div class="col-lg-12 col-sm-6 col-xs-12">
            <div class="white-box analytics-info">
              <h5 class="card-title mb-0">สถานะการสั่งซื้อ</h5>
              <div class="table-responsive">
                <table class="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th><h3 class="box-title">จำนวนออร์เดอร์ที่เสร็จสมบูรณ์</h3></th>
                      <th><h3 class="box-title">รายการ</h3></th>
                      <th></th>
                      <th><h3 class="box-title">เวลา</h3></th>
                      <th><h3 class="box-title">ราคา</h3></th>
                      <th><h3 class="box-title">สถานะ</h3></th>
                      <th><h3 class="box-title">ยกเลิก</h3></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map(item => (
                      <tr>
                        <td ><h3 class="box-title">{item.orderID+" ("+item.productName+")"}</h3></td>
                        <td><img src="../img/post/post_5.png" alt="" /></td>
                        {/* <td><h3 class="box-title">{this.state.data.productName}</h3></td> */}
                        <td><h3 class="box-title">{item.orderStatus}</h3></td>
                        <td><h3 class="box-title">{item.orderTime}</h3></td>
                        {/* <td><h3 class="box-title">{this.state.data.price}</h3></td> */}
                        <td><h3 class="box-title">{item.subtotal}</h3></td>
                        {/* <td><h3 class="box-title">{this.state.data.quantity}</h3></td> */}
                        <td><select name='Status' onClick={this.handleChange} data-orderid={item.orderID}>
                          <option value="รอคิว">รอคิว</option>
                          <option value="กำลังปรุง">กำลังปรุง</option>
                          <option value="ปรุงเสร็จ">ปรุงเสร็จ</option>
                          <option value="รอรับ">รอรับ</option>
                          <option value="รับอาหารแล้ว">รับอาหารแล้ว</option>
                        </select></td>

                        <button class="button button-contactForm btn_4 boxed-btn-del" onClick={() =>{if (window.confirm('ต้องการจะลบข้อมูลใช่หรือไม่ ?')) this.handleDelete(item.orderID)}}>ยกเลิก</button>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default OrderOwner;