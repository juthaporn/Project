import React from 'react';

class ShopOwner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shopName: '',
            productName : '',
            productPrice: ''
        }
}


    render(){
        return( 

            <div class="container">
                <br/>
                <div class="row">
                            <div class="col-lg-4 col-sm-6 col-xs-12">
                                <div class="white-box analytics-info">
                                    <h3 class="box-title">ยอดขายทั้งหมด (บาท)</h3>
                                    <ul class="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash">
                                                {/* <canvas width="67" height="30" style="display: inline-block; width: 67px; height: 30px; vertical-align: top;"></canvas> */}
                                            </div>
                                        </li>
                                        <li class="text-right"><i class="ti-arrow-up text-success"></i> <span class="counter text-success">1,525</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 col-xs-12">
                                <div class="white-box analytics-info">
                                    <h3 class="box-title">จำนวนรายการสั่งซื้อ (ออร์เดอร์)</h3>
                                    <ul class="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash2"></div>
                                        </li>
                                        <li class="text-right"><i class="ti-arrow-up text-purple"></i> <span class="counter text-purple">41</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 col-xs-12">
                                <div class="white-box analytics-info">
                                    <h3 class="box-title">ช่วงเวลาที่ขายดี</h3>
                                    <ul class="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash3"></div>
                                        </li>
                                        <li class="text-right"><i class="ti-arrow-up text-info"></i> <span class="counter text-info">11:32</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-md-6 grid-margin stretch-card">
                        <div class="col-md-12 stretch-card transparent">
                        <div class="card tale-bg">
                            <div class="card-people mt-auto">
                            <img class="card-img" src="img/recepie/recepie_details.png" alt="" />
                            </div>
                            </div>
                            <br/>
                        </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12">
                                <div class="white-box analytics-info">
                                    <h3 class="box-title">เมนูขายดี</h3>
                                    <ul class="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash">
                                            <div class="blog__sidebar__recent__item__pic">
                                                        <img src="img/post/post_5.png" alt=""/>  
                                                    </div>
                                                {/* <canvas width="67" height="30" style="display: inline-block; width: 67px; height: 30px; vertical-align: top;"></canvas> */}
                                            </div>
                                        </li>
                                    </ul>
                                    <br/>
                                    <ul class="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash">
                                            <div class="blog__sidebar__recent__item__pic">
                                                        <img src="img/post/post_5.png" alt=""/>  
                                                    </div>
                                                {/* <canvas width="67" height="30" style="display: inline-block; width: 67px; height: 30px; vertical-align: top;"></canvas> */}
                                            </div>
                                        </li>
                                    </ul>
                                    <br/>
                                    <ul class="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash">
                                            <div class="blog__sidebar__recent__item__pic">
                                                        <img src="img/post/post_5.png" alt=""/>  
                                                    </div>
                                                {/* <canvas width="67" height="30" style="display: inline-block; width: 67px; height: 30px; vertical-align: top;"></canvas> */}
                                            </div>
                                        </li>
                                    </ul>
                                    <br/>
                                </div>
                            </div>
                        
                         </div>
                </div>
           
              
      
         
            
        )
    }
}

export default ShopOwner;

