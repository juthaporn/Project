import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment/min/moment-with-locales';

class YearRent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            ShopName: "",
            shopPhone: "",
            shopID: ""
        }

    }

    componentDidMount(){
        this.getData()
        console.log("shopID",this.props.match.params.id)
    }
  
    getData = () => {
        var x = this;
        axios.get("http://localhost:3000/shop/getYearRentByShop/"+this.props.match.params.id).then((res) => {
            // console.log(res.data.data)
          this.setState({data: res.data.data});
          this.setState({shopID: this.state.data[0].shopID})
          this.setState({shopName: this.state.data[0].shopName})
          this.setState({shopPhone: this.state.data[0].shopPhone})
        //   console.log("admin",this.state.data[0])
            console.log(this.state.data)
          // x.setState({data: res.data.data});
        }).catch((error) => {
          console.log(error);
        });
      }


    render(){
        // const style1 = {
        //     background: "#F0FFFF"
        // }
        return(
            <div class="container">
                {/* container-fluid */}
                <div class="box-title-head">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="title-head text-center">
                                ค่าเช่ารายปี   
                            </div>
                        </div>
                    </div>
                </div>
        
                {/* <br /> */}
                {/* <a href="/admin" class="line_btn" style={style1}>ย้อนกลับ</a> */}
                <div>

                    <table class="table table-borderless">
                            <td width="50%">
                                <br />
                                <h5>ร้านค้า : {this.state.shopName}</h5>
                            </td>
                            <td>
                            <br />
                                <h5>เบอร์โทร : {this.state.shopPhone}</h5>
                            </td>
                             
                    </table>
                    <div class="row">
                        {/* <div class="col-lg-4">
                            <br />
                            <img class="card-img" src="img/cofe.jpg" alt="" />
                        </div> */}

                        {
                            this.state.data?.map(item => (
                                <div class="col-lg-12 box">
                                    <div class="f-card">
                                        <strong>ประจำปี</strong> : 
                                        
                                        {item.year}
                                        {/* {item.year != null
                                        ? <span>{moment(item.year).locale('th').format('YYYY')}</span>
                                        : <span> ไม่มีข้อมูล</span>
                                        } */}
                                    </div>
                                    <div class="f-card">
                                        <strong>คำอธิบายเพิ่มเติม</strong> : {item.rentDetail}
                                    </div>
                                    <div class="f-card">
                                        <strong>ค่าเช่าร้าน</strong> : {item.rentalFee}
                                    </div>
                                </div>
                                
                            ))
                        }
                        </div>
                </div>
                {/* </div> */}
            </div>
        )
    }
}

export default YearRent;