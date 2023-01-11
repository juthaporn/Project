import React from 'react';
import axios from 'axios';
class ShopOwner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            datetime: Date()
        }
}
    // componentDidMount(){
    // this.getData()
    // console.log("shopID",this.props.match.params.id)
    // }

    // getData = () => {
    //     var x = this;
    //     axios.get("http://localhost:3000/order/getsumTotal/"+this.props.match.params.id).then((res) => {
    //         this.setState({data: res.data.data});
    //         console.log(this.state.data)
    //     }).catch((error) => {
    //       console.log(error);
    //     });
    // }

    render(){
        return( 

            <div class="container">
                <br/>
                <h5 class="box-title">หน้ายอดขาย</h5>
                <h5 class="text-right">({this.state.datetime}) </h5>
                    <div class="row">
                            <div class="col-lg-4 col-sm-6 col-xs-12">
                                <div class="white-box analytics-info">
                                    <h3 class="box-title">ยอดขายทั้งหมด </h3>
                                    <ul class="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash">
                                                {/* <canvas width="67" height="30" style="display: inline-block; width: 67px; height: 30px; vertical-align: top;"></canvas> */}
                                            </div>
                                        </li>
                                        <h5><li class="text-right"><i class="ti-arrow-up text-success"></i> <span class="counter text-success">660 บาท</span></li></h5>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 col-xs-12">
                                <div class="white-box analytics-info">
                                    <h3 class="box-title">จำนวนรายการสั่งซื้อ (ออเดอร์)</h3>
                                    <ul class="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash2"></div>
                                        </li>
                                        <h5><li class="text-right"><i class="ti-arrow-up text-purple"></i> <span class="counter text-purple " >10 รายการ</span></li></h5>
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
                                        <h5><li class="text-right"><i class="ti-arrow-up text-info"></i> <span class="counter text-info">11:32 </span></li></h5>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-md-6 grid-margin stretch-card">
                        <div class="col-md-12 stretch-card transparent">
                        <div class="card tale-bg">
                            <div class="card-people mt-auto">
                            <img class="card-img" src="../img/recepie/recepie_details.png" alt="" />
                            </div>
                            </div>
                            <br/>
                        </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12">
                                <div class="white-box analytics-info">
                                   <h3 class="box-title">เมนูขายดี</h3>
                                        <table class="table ">
                                        <tbody>
                                        <tr>                       
                                        <td><img src="../img/post/post_10.png" alt=""/></td>
                                        <td> <h3 class="box-title">ก๋วยเตี๋ยวต้มยำ</h3></td>
                                        </tr>
                                        <tr>
                                        <td><img src="../img/post/post_7.png" alt=""/></td>
                                        <td> <h3 class="box-title">ก๋วยเตี๋ยวต้มยำทะเล</h3></td>
                                        </tr>
                                        <tr>
                                        <td><img src="../img/post/post_5.png" alt=""/></td>
                                        <td> <h3 class="box-title">บะหมี่เกี๊ยวหมูแดง</h3></td></tr>
                                        </tbody>
                                    </table>
                                    </div>
                            </div>
                        
                         </div>
                </div>
        )
    }
}

export default ShopOwner;

