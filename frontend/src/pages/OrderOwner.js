import React from 'react';

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

    render(){
        return(   
          
            <div class ="container"><br/>
            <p class="text-left font-weight-bold">หน้าออร์เดอร์</p>
              <p class="text-right font-weight-bold">วันที่ 10/5/2565</p>
                      <div class="row">
                      <div class="col-lg-3 col-sm-6 col-xs-12">
                          <div class="white-box analytics-info">
                              <h3 class="box-title">จำนวนออร์เดอร์ที่รอคิว</h3>
                              <ul class="list-inline two-part">
                                  <li>
                                      <div id="sparklinedash">
                                      </div>
                                  </li>
                                  <li class="text-right"><i class="ti-arrow-up text-primary"></i> <span class="counter text-primary">9 รายการ</span></li>
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
                                  <li class="text-right"><i class="ti-arrow-up text-warning"></i> <span class="counter text-warning">9 รายการ</span></li>
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
                                  <li class="text-right"><i class="ti-arrow-up text-success"></i> <span class="counter text-success">1 รายการ</span></li>
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
                                  <li class="text-right"><i class="ti-arrow-up text-danger"></i> <span class="counter text-danger">9 รายการ</span></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                <br/>
                    <div class="col-md-12 grid-margin stretch-card">
                    <div class="card">
                      <div class="card-body">
                        <p class="card-title mb-0">สถานะการสั่งซื้อ</p>
                        <div class="table-responsive">
                          <table class="table table-striped table-borderless">
                            <thead>
                              <tr>
                                <th>หมายเลขออร์เดอร์</th>
                                <th>รายการ</th>
                                <th></th>
                                <th>เวลา</th>
                                <th>ราคา</th>
                                <th>จำนวน</th>
                                <th>สถานะ</th>
                                <th>แก้ไข</th>
                              </tr>  
                            </thead>
                            <tbody>
                              <tr>
                              <td class="font-weight-bold ">1</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Search Engine Marketing</td>
                                <td>20:18</td>
                                <td>30</td>
                                <td>2</td>
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
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Search Engine Marketing</td>
                                <td>20:18</td>
                                <td>30</td>
                                <td>2</td>
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
                          ยืนยันการยกเลิก
                        </div>
                        {/* <button type="button" class="btn btn-primary">Primary</button>
                        <button type="button" class="btn btn-secondary">Secondary</button>
                        <button type="button" class="btn btn-success">Success</button>
                        <button type="button" class="btn btn-danger">Danger</button> */}
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