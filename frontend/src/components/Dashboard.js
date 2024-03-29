import React from 'react';

class Dashboad extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            i:0
        }
    }

    // componentDidMount(){
    //     this.getData()
    //     console.log("MemberID",this.props.match.params.id)
    // }

    // getData = () => {
    //     var x = this;
    //     axios.get("http://localhost:3000/member/getMemberRole/3").then((res) => {
    //       this.setState({data: res.data.data[0]});
    //       console.log("admin",this.state.data)
    //       // x.setState({data: res.data.data});
    //     }).catch((error) => {
    //       console.log(error);
    //     });
    // }

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
                                    <h4><strong>59</strong> ร้าน</h4></li>
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
                                    {/* {
                                        this.state.data?.map(item => (
                                            if(item.name != null){
                                                i++
                                            }
                                        ))
                                    } */}
                                    <h4><strong>69</strong> คน</h4></li>
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
                                    <h4><strong>91</strong> คน</h4></li>
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Dashboad;