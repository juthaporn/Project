import React from 'react';


class Cart extends React.Component{
    render(){
        return( 
            <div class ="container">
                <br/>
                    <div class="col-md-12 grid-margin stretch-card">
                    <div class="card">
                      <div class="card-body">
                        <p class="card-title mb-0">รถเข็น</p>
                        <div class="table-responsive">
                          <table class="table table-striped table-borderless">
                            <thead>
                              <tr>
                                <th></th>
                                <th></th>
                                <th>จำนวน</th>
                                <th>ราคา</th>
                              </tr>  
                            </thead>
                            <tbody>
                              <tr>
                              <td><img src="img/post/post_5.png" alt=""/></td>
                                <td>Search Engine Marketing</td>
                                <td>
                                    <input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
                                </td>
                                <td>
                                <td> 50 บาท</td>
                                </td>
                                    <a href="/Menu" className="nav-link" class='badge badge-danger'>ลบ</a>
                              </tr>
                              <tr>
                              <td><img src="img/post/post_4.png" alt=""/></td>
                                <td>Search Engine Marketing</td>
                                <td>
                                    <input type="number" id="tentacles" name="tentacles" min="0" max="100"></input>
                                </td>
                                <td>
                                <td> 45 บาท</td>
                                </td>
                                    <a href="/Menu" className="nav-link" class='badge badge-danger'>ลบ</a>
                              </tr>
                            </tbody>
                          </table>
                          <div class="form-group text-center">
                          <a href="/Order" class="btn btn-primary">สั่งซื้อ</a>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
        )
    }
}

export default Cart;