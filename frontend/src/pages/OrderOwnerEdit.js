import React from 'react';

class OrderOwnerEdit extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         orderDate: '',
    //         orderStatus: '',
    //         subtotal: '',
    //         orderDetail: '',
    //         quantity: '',
    //         price: '',
    //         productName : '',
    //     }
// }


    render(){
        return(   
          
            <div class ="container"><br/> 
            <h5 class="text-left ">หน้าแก้ไขรายการสั่งซื้อการสั่งซื้อ</h5>
            <h5 class="text-right ">วันที่ 10/5/2565</h5>
                      <div class="row">
                      <div class="col-lg-12 col-sm-6 col-xs-12">
                          <div class="white-box analytics-info">
                              <h3 class="box-title">จำนวนออร์เดอร์ที่รอคิว</h3>
                        <div class="table-responsive">
                          <table class="table table-striped table-borderless">
                            <thead>
                              <tr>
                                <th><h3 class="box-title">หมายเลขออร์เดอร์</h3></th>
                                <th><h3 class="box-title"></h3></th>
                                <th><h3 class="box-title">รายการ</h3></th>
                                <th><h3 class="box-title">จำนวน</h3></th>
                                <th><h3 class="box-title">ยกเลิก</h3></th>
                               
                              </tr>  
                            </thead>
                            <tbody>
                              <tr>
                              <td class="font-weight-bold ">1</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                              <td><h3 class="box-title">ข้าว</h3></td>
                                <td>
                                <input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
                                </td>
                                  <td><button type="cancel" className="nav-link" class='badge badge-danger' data-toggle="modal" data-target="#exampleModal">ยกเลิก</button></td>
                              </tr>

                              <tr>
                              <td></td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                              <td><h3 class="box-title">ข้าว</h3></td>
                                <td>
                                <input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
                                </td>
                                <td><button type="cancel" className="nav-link" class='badge badge-danger'>ยกเลิก</button></td>
                              </tr>
                              <tr>
                              <td class="font-weight-bold">3</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                              <td><h3 class="box-title">ข้าว</h3></td>
                                <td>
                                <input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
                                </td>
                                <td><button type="cancel" className="nav-link" class='badge badge-danger'>ยกเลิก</button></td>
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

export default OrderOwnerEdit;