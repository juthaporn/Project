import React from 'react';
import axios from 'axios';
// import React, { useState } from "react";

class OrderOwner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orderDate: '',
            orderStatus: '',
            subtotal: '',
            orderDetail: '',
            quantity: '',
            price: '',
            productName : '',
        }
}

componentDidMount(){
  this.getData()
}

              getData = () => {
                var x = this;
                axios.get("http://localhost:3000/getOneShop/13").then((res) => {
                  this.setState({data: res.data.data[0]});
                  console.log("owner",this.state.data)
                  // x.setState({data: res.data.data});
                }).catch((error) => {
                  console.log(error);
                });
              }
    render(){
        return(   
          
            <div class ="container"><br/>
            <h5 class="text-left ">หน้าออร์เดอร์</h5>
              <h5 class="text-right ">วันที่ 10/5/2565</h5>
                      <div class="row">
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
                  </div>
                <br/>
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
                                <th><h3 class="box-title">จำนวน</h3></th>
                                <th><h3 class="box-title">สถานะ</h3></th>
                                <th><h3 class="box-title">แก้ไข</h3></th>
                              </tr>  
                            </thead>
                            <tbody>
                              <tr>
                              <td ><h3 class="box-title">1</h3></td>
                              <td><img src="../img/post/post_5.png" alt=""/></td>
                                <td><h3 class="box-title">ข้าว</h3></td>
                                <td><h3 class="box-title">20:18</h3></td>
                                <td><h3 class="box-title">30</h3></td>
                                <td><h3 class="box-title">2</h3></td>
                                <td><button type="cancel" className="nav-link" class='badge badge-danger' data-toggle="modal" data-target="#exampleModal">แก้ไข</button></td>
                                {/* <td>
                                <select class="selectpicker">
                                  <option class='badge badge-success'>เสร็จสิ้น</option>
                                  <option class='badge badge-primary'>รอ</option>
                                  <option class='badge badge-warning'>กำลังปรุง</option>
                                  <option class='badge badge-danger'>ยกเลิก</option>
                                </select>
                                </td> */}
                                <td><a href="/OrderOwnerEdit" className="nav-link" class='badge badge-danger'>แก้ไข</a></td>
                              </tr>

                              <tr>
                              <td></td>
                              <td><img src="../img/post/post_5.png" alt=""/></td>
                              <td><h3 class="box-title">ข้าว</h3></td>
                                <td><h3 class="box-title">20:18</h3></td>
                                <td><h3 class="box-title">45</h3></td>
                                <td><h3 class="box-title">2</h3></td>
                                <td><button type="cancel" className="nav-link" class='badge badge-danger' data-toggle="modal" data-target="#exampleModal">แก้ไข</button></td>
                                {/* <td>
                                <select class="selectpicker">
                                  <option class='badge badge-success'>เสร็จสิ้น</option>
                                  <option class='badge badge-primary'>รอ</option>
                                  <option class='badge badge-warning'>กำลังปรุง</option>
                                  <option class='badge badge-danger'>ยกเลิก</option>
                                </select>
                                </td> */}
                                 <td><a href="/OrderOwnerEdit" className="nav-link" class='badge badge-danger'>แก้ไข</a></td>
                              </tr>
                              
                              
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br/>
                  <modal>          
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">แจ้งเตือน</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                         เลือกสถานะ
                        </div>

                        {/* <button type="button" class="btn btn-primary">รอคิว </button>
                        <button type="button" class="btn btn-secondary">กำลังปรุง</button>
                        <button type="button" class="btn btn-success">ปรุงเสร็จ</button>
                        <button type="button" class="btn btn-danger">ยกเลิก</button> */}
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">กลับ</button>
                          <button type="button" class="btn btn-danger" data-dismiss="modal">ยืนยัน</button>
                          {/* <button type="button" class="btn btn-danger"></button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                      </modal>   
          </div>
        )
    }
}

export default OrderOwner;