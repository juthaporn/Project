import React from 'react';

class Dashboad extends React.Component{
    render(){
        return(
            <div class="row">
                    <div class="col-lg-4 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">จำนวนร้านค้าในระบบ</h3>
                            <ul class="list-inline two-part">
                                <li>
                                    <div id="sparklinedash">
                                        {/* <canvas width="67" height="30" style="display: inline-block; width: 67px; height: 30px; vertical-align: top;"></canvas> */}
                                    </div>
                                </li>
                                <li class="text-right">
                                    <i class="ti-arrow-up text-success"></i> 
                                    <span class="counter text-success">59</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">จำนวนผู้ประกอบการ</h3>
                            <ul class="list-inline two-part">
                                <li>
                                    <div id="sparklinedash2"></div>
                                </li>
                                <li class="text-right">
                                    <i class="ti-arrow-up text-purple"></i> 
                                    <span class="counter text-purple">69</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">จำนวนผู้ใช้งาน</h3>
                            <ul class="list-inline two-part">
                                <li>
                                    <div id="sparklinedash3"></div>
                                </li>
                                <li class="text-right">
                                    <i class="ti-arrow-up text-info"></i> 
                                    <span class="counter text-info">91</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Dashboad;