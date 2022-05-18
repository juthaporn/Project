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
            <p class="text-left font-weight-bold">หน้าแก้ไขรายการสั่งซื้อการสั่งซื้อ</p>
              <p class="text-right font-weight-bold">วันที่ 10/5/2565</p>
                      
                <br/>
                    <div class="col-md-12 grid-margin stretch-card">
                    <div class="card">
                      <div class="card-body">
                        <p class="card-title mb-0">แก้ไขรายการสั่งซื้อการสั่งซื้อ</p>
                        <div class="table-responsive">
                          <table class="table table-striped table-borderless">
                            <thead>
                              <tr>
                                <th>หมายเลขออร์เดอร์</th>
                                <th>รายการ</th>
                                <th></th>
                                <th >จำนวน</th>
                                <th>ยกเลิก</th>
                              </tr>  
                            </thead>
                            <tbody>
                              <tr>
                              <td class="font-weight-bold ">1</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Search Engine Marketing</td>
                                <td>
                                <input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
                                </td>
                                  <td><button type="cancel" className="nav-link" class='badge badge-danger' data-toggle="modal" data-target="#exampleModal">ยกเลิก</button></td>
                              </tr>

                              <tr>
                              <td></td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Search Engine Marketing</td>
                                <td>
                                <input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
                                </td>
                                <td><button type="cancel" className="nav-link" class='badge badge-danger'>ยกเลิก</button></td>
                              </tr>
                              
                              <tr>
                              <td class="font-weight-bold">2</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Search Engine Optimization</td>
                                <td>
                                <input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
                                </td>
                                <td><button type="cancel" className="nav-link" class='badge badge-danger'>ยกเลิก</button></td>
                              </tr>
                              <tr>
                              <td class="font-weight-bold">3</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Display Advertising</td>
                                <td>
                                <input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
                                </td>
                                <td><button type="cancel" className="nav-link" class='badge badge-danger'>ยกเลิก</button></td>
                              </tr>
                              <tr>
                              <td class="font-weight-bold">4</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Pay Per Click Advertising</td>
                                <td>
                                <input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
                                </td>
                                <td><button type="cancel" className="nav-link" class='badge badge-danger'>ยกเลิก</button></td>
                              </tr>
                              <tr>
                              <td class="font-weight-bold">5</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>E-Mail Marketing</td>
                                <td>
                                <input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
                                </td>
                                <td><button type="cancel" className="nav-link" class='badge badge-danger'>ยกเลิก</button></td>
                              </tr>
                              <tr>
                              <td class="font-weight-bold">6</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Referral Marketing</td>        
                                <td>
                                <input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
                                </td>
                                <td><button type="cancel" className="nav-link" class='badge badge-danger'>ยกเลิก</button></td>
                              </tr>
                              <tr>
                              <td class="font-weight-bold">7</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Social media marketing</td> 
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
                          <button type="button" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
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