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
            <div class ="container">
                <br/>
            <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <p class="card-title mb-0">สถานะการสั่งซื้อ</p>
                <div class="table-responsive">
                  <table class="table table-striped table-borderless">
                    <thead>
                      <tr>
                        <th>ลำดับ</th>
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
                        <td class="font-weight-medium"><div class="badge badge-success">เสร็จสิ้น</div></td>
                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                      <tr>
                      <td class="font-weight-bold">2</td>
                        <td>Search Engine Optimization</td>
                       
                        <td>20:18</td>
                        <td class="font-weight-medium"><div class="badge badge-success">เสร็จสิ้น</div></td>
                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                      <tr>
                      <td class="font-weight-bold">3</td>
                        <td>Display Advertising</td>
                        
                        <td>20:18</td>
                        <td class="font-weight-medium"><div class="badge badge-warning">กำลังปรุง</div></td>
                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                      <tr>
                      <td class="font-weight-bold">4</td>
                        <td>Pay Per Click Advertising</td>
                       
                        <td>20:18</td>
                        <td class="font-weight-medium"><div class="badge badge-warning">กำลังปรุง</div></td>
                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                      <tr>
                      <td class="font-weight-bold">5</td>
                        <td>E-Mail Marketing</td>
                        
                        <td>20:18</td>
                        <td class="font-weight-medium"><div class="badge badge-danger">ยกเลิก</div></td>
                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                      <tr>
                      <td class="font-weight-bold">6</td>
                        <td>Referral Marketing</td>
                        
                        <td>20:18</td>
                        <td class="font-weight-medium"><div class="badge badge-primary">รอ</div></td>
                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                      <tr>
                      <td class="font-weight-bold">7</td>
                        <td>Social media marketing</td>
                     
                        <td>10:18</td>
                        <td class="font-weight-medium"><div class="badge badge-success">เสร็จสิ้น</div></td>
                        <td class="font-weight-medium"><div class="badge badge-danger">แก้ไข</div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div class="row">
                <div class="col-md-6 mb-4 stretch-card transparent">
                  <div class="card card-tale">
                    <div class="card-body">
                    <td class="font-weight-medium"><div class="badge badge-primary">รายการที่รอคิว</div></td>
                      <p class="mb-4">วันที่ </p>
                      <p>รายการที่เสร็จสมบูรณ์ทั้งหมด 25 รายการ</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-4 stretch-card transparent">
                  <div class="card card-dark-blue">
                    <div class="card-body">
                    <td class="font-weight-medium"><div class="badge badge-warning">รายการที่กำลังปรุง</div></td>
                      <p class="mb-4">วันที่ </p>
                      <p>รายการที่ยกเลิกทั้งหมด 25 รายการ</p>
                    </div>
                  </div>
                </div>
                 <div class="col-md-6 mb-4 stretch-card transparent">
                  <div class="card card-tale">
                    <div class="card-body">
                    <td class="font-weight-medium"><div class="badge badge-success">รายการที่เสร็จสมบูรณ์</div></td>
                      <p class="mb-4">วันที่ </p>
                      <p>รายการที่เสร็จสมบูรณ์ทั้งหมด 25 รายการ</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-4 stretch-card transparent">
                  <div class="card card-dark-blue">
                    <div class="card-body">
                    <td class="font-weight-medium"><div class="badge badge-danger">รายการที่ยกเลิกแล้ว</div></td>
                      <p class="mb-4">วันที่ </p>
                      <p>รายการที่ยกเลิกทั้งหมด 25 รายการ</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )
    }
}

export default OrderOwner;