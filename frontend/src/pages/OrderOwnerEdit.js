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
                                <div class="center11">
                                     <input type="text"placeholder="10"/>
                                  <p></p>
                                </div>
                                </td>
                                  <a  className="nav-link" class='badge badge-danger'>ยกเลิก</a>
                              </tr>

                              <tr>
                              <td></td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Search Engine Marketing</td>
                                <td>
                                <div class="center11">
                                     <input type="text"/>
                                  <p></p>
                                </div>
                                </td>
                                <a  className="nav-link" class='badge badge-danger'>ยกเลิก</a>
                              </tr>
                              
                              <tr>
                              <td class="font-weight-bold">2</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Search Engine Optimization</td>
                                <td>
                                <div class="center11">
                                     <input type="text"/>
                                  <p></p>
                                </div>
                                </td>
                                <a  className="nav-link" class='badge badge-danger'>ยกเลิก</a>
                              </tr>
                              <tr>
                              <td class="font-weight-bold">3</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Display Advertising</td>
                                <td>
                                <div class="center11">
                                     <input type="text"/>
                                  <p></p>
                                </div>
                                </td>
                                <a  className="nav-link" class='badge badge-danger'>ยกเลิก</a>
                              </tr>
                              <tr>
                              <td class="font-weight-bold">4</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Pay Per Click Advertising</td>
                                <td>
                                <div class="center11">
                                     <input type="text"/>
                                  <p></p>
                                </div>
                                </td>
                                <a  className="nav-link" class='badge badge-danger'>ยกเลิก</a>
                              </tr>
                              <tr>
                              <td class="font-weight-bold">5</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>E-Mail Marketing</td>
                                <td>
                                <div class="center11">
                                     <input type="text"/>
                                  <p></p>
                                </div>
                                </td>
                                <a  className="nav-link" class='badge badge-danger'>ยกเลิก</a>
                              </tr>
                              <tr>
                              <td class="font-weight-bold">6</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Referral Marketing</td>        
                                <td>
                                <div class="center11">
                                     <input type="text"/>
                                  <p></p>
                                </div>
                                </td>
                                <a  className="nav-link" class='badge badge-danger'>ยกเลิก</a>
                              </tr>
                              <tr>
                              <td class="font-weight-bold">7</td>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Social media marketing</td> 
                                <td>
                                <div class="center11">
                                     <input type="text"/>
                                  <p></p>
                                </div>
                                </td>
                                <a  className="nav-link" class='badge badge-danger'>ยกเลิก</a>
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

export default OrderOwnerEdit;