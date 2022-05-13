import React from 'react';

class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productName: '',
            productPrice: '',
            orderDetail: '',
            quantity: '',
            orderDate:'',
            subtotal:''
        }
}

    render(){
        return(   
                   
       
            <div class ="container"><br/>
            <div class="row">
            <div class="col-lg-3 col-sm-6 col-xs-12">
                <div class="white-box analytics-info">
                    <h3 class="box-title">จำนวนออร์เดอร์ที่รอคิว</h3>
                    <ul class="list-inline two-part">
                        <li>
                            <div id="sparklinedash">
                            </div>
                        </li>
                        <li class="text-right"><i class="ti-arrow-up text-primary"></i> <span class="counter text-primary">9</span></li>
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
                        <li class="text-right"><i class="ti-arrow-up text-warning"></i> <span class="counter text-warning">9</span></li>
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
                        <li class="text-right"><i class="ti-arrow-up text-success"></i> <span class="counter text-success">1</span></li>
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
                        <li class="text-right"><i class="ti-arrow-up text-danger"></i> <span class="counter text-danger">9</span></li>
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
                        <th>เวลา</th>
                        <th>สถานะ</th>
                        <th>แก้ไข</th>

                      </tr>  
                    </thead>
                    <tbody>
                      <tr>
                      <td class="font-weight-bold">1</td>
                        <td>Search Engine Marketing</td>
                        <td>20:18</td>
                        <td>
                        <select class="selectpicker">
                          <option class='badge badge-success'>เสร็จสิ้น</option>
                          <option class='badge badge-primary'>รอ</option>
                          <option class='badge badge-warning'>กำลังปรุง</option>
                          <option class='badge badge-danger'>ยกเลิก</option>
                        </select>
                        </td>

                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                      <tr>
                      <td class="font-weight-bold">2</td>
                        <td>Search Engine Optimization</td>
                       
                        <td>20:18</td>
                        <td>
                        <select class="selectpicker">
                          <option class='badge badge-success'>เสร็จสิ้น</option>
                          <option class='badge badge-primary'>รอ</option>
                          <option class='badge badge-warning'>กำลังปรุง</option>
                          <option class='badge badge-danger'>ยกเลิก</option>
                        </select>
                        </td>

                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                      <tr>
                      <td class="font-weight-bold">3</td>
                        <td>Display Advertising</td>
                        
                        <td>20:18</td>
                        <td>
                        <select class="selectpicker">
                          <option class='badge badge-success'>เสร็จสิ้น</option>
                          <option class='badge badge-primary'>รอ</option>
                          <option class='badge badge-warning'>กำลังปรุง</option>
                          <option class='badge badge-danger'>ยกเลิก</option>
                        </select>
                        </td>

                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                      <tr>
                      <td class="font-weight-bold">4</td>
                        <td>Pay Per Click Advertising</td>
                       
                        <td>20:18</td>
                        <td>
                        <select class="selectpicker">
                          <option class='badge badge-success'>เสร็จสิ้น</option>
                          <option class='badge badge-primary'>รอ</option>
                          <option class='badge badge-warning'>กำลังปรุง</option>
                          <option class='badge badge-danger'>ยกเลิก</option>
                        </select>
                        </td>

                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                      <tr>
                      <td class="font-weight-bold">5</td>
                        <td>E-Mail Marketing</td>
                        
                        <td>20:18</td>
                        <td>
                        <select class="selectpicker">
                          <option class='badge badge-success'>เสร็จสิ้น</option>
                          <option class='badge badge-primary'>รอ</option>
                          <option class='badge badge-warning'>กำลังปรุง</option>
                          <option class='badge badge-danger'>ยกเลิก</option>
                        </select>
                        </td>

                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                      <tr>
                      <td class="font-weight-bold">6</td>
                        <td>Referral Marketing</td>
                        
                        <td>20:18</td>
                        <td>
                        <select class="selectpicker">
                          <option class='badge badge-success'>เสร็จสิ้น</option>
                          <option class='badge badge-primary'>รอ</option>
                          <option class='badge badge-warning'>กำลังปรุง</option>
                          <option class='badge badge-danger'>ยกเลิก</option>
                        </select>
                        </td>

                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                      <tr>
                      <td class="font-weight-bold">7</td>
                        <td>Social media marketing</td>
                     
                        <td>10:18</td>
                        <td>
                        <select class="selectpicker">
                          <option class='badge badge-success'>เสร็จสิ้น</option>
                          <option class='badge badge-primary'>รอ</option>
                          <option class='badge badge-warning'>กำลังปรุง</option>
                          <option class='badge badge-danger'>ยกเลิก</option>
                        </select>
                        </td>

                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <br/>
        
          </div>
        )
    }
}

export default Order;