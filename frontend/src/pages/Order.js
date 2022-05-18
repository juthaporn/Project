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
         
          <div class ="container"> 
          <br/>   
          <div class="container">
              <div class="row">
        
                <div class="col-xs-12">
                  <div class="grid invoice">
                    <div class="grid-body">
                
                      <div class="row">
                        <div class="col-md-12">
                          <h3>รายการสั่งซื้อ</h3>
                          <table class="table table-striped">
                            <thead>
                              <tr class="line">
                                <td><strong>#</strong></td>
                                <td class="text-center"><strong>PROJECT</strong></td>
                                <td class="text-center"><strong>HRS</strong></td>
                                <td class="text-right"><strong>RATE</strong></td>
                                <td class="text-right"><strong>SUBTOTAL</strong></td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td><strong>Template Design</strong><br/>A website template is a pre-designed webpage, or set of webpages, that anyone can modify with their own content and images to setup a website.</td>
                                <td class="text-center">15</td>
                                <td class="text-center">$75</td>
                                <td class="text-right">$1,125.00</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td><strong>Template Development</strong><br/>Web development is a broad term for the work involved in developing a web site for the Internet (World Wide Web) or an intranet (a private network).</td>
                                <td class="text-center">15</td>
                                <td class="text-center">$75</td>
                                <td class="text-right">$1,125.00</td>
                              </tr>
                              <tr class="line">
                                <td>3</td>
                                <td><strong>Testing</strong><br/>Take measures to check the quality, performance, or reliability of (something), especially before putting it into widespread use or practice.</td>
                                <td class="text-center">2</td>
                                <td class="text-center">$75</td>
                                <td class="text-right">$150.00</td>
                              </tr>
                              <tr>
                                <td colspan="3"></td>
                                <td class="text-right"><strong>Taxes</strong></td>
                                <td class="text-right"><strong>N/A</strong></td>
                              </tr>
                              <tr>
                                <td colspan="3">
                                </td><td class="text-right"><strong>Total</strong></td>
                                <td class="text-right"><strong>$2,400.00</strong></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>									
                      </div>
                      <div class="row">
                        <div class="col-md-12 text-right identity">
                          <p>Designer identity<br/><strong>Jeffrey Williams</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

         </div>
        </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          
        )
    }
}

export default Order;