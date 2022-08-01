import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


class Rent extends React.Component{
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
        axios.get("http://localhost:3000/shop/getRentByShop/"+this.props.match.params.id).then((res) => {
          this.setState({data: res.data.data[0]});
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
                                ค่าเช่าร้าน    
                            </div>
                        </div>
                    </div>
                </div>
        
                {/* <br /> */}
                {/* <a href="/admin" class="line_btn" style={style1}>ย้อนกลับ</a> */}
                <div>

                    <table class="table table-borderless">
                            <td width="30%">
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
                                        <strong>ประจำเดือน</strong> : {item.month}
                                    </div>
                                    <div class="f-card">
                                        <strong>จำนวนหน่วยค่าน้ำ</strong> : {item.waterUnit}
                                    </div>
                                    <div class="f-card">
                                        <strong>ค่าน้ำ</strong> : {item.shopPhone}
                                    </div>
                                    <div class="f-card">
                                        <strong>จำนวนหน่วยค่าไฟ</strong> : {item.powerUnit}
                                    </div>
                                    <div class="f-card">
                                        <strong>ค่าไฟ</strong> : {item.openingTime}
                                    </div>
                                    <div class="f-card">
                                        <strong>ค่ากำจัดขยะ</strong> : {item.cleaningFee}
                                    </div>
                                    <div class="f-card">
                                        <strong>ค่าทำความสะอาด</strong> : {item.wasteDisposalFee}
                                    </div>
                                    <Link to={"/AddYearRent/"+item.shopID} class="button button-contactForm btn_4 boxed-btn-add">เพิ่มค่าเช่าร้าน</Link>
                                    <Link to={"/AddRent/"+item.shopID} class="button button-contactForm btn_4 boxed-btn-add">เพิ่มค่าน้ำ-ค่าไฟ</Link>
                                    {/* <button type="submit" class="button button-contactForm btn_4 boxed-btn-del">ลบ</button> */}
                                </div>
                                
                            ))
                        }
                        </div>
                        {/* <table>
                            <td width="40%"></td>
                            <td><Link to="/admin" class="button button-contactForm btn_4 boxed-btn-btn">ย้อนกลับ</Link>&nbsp;&nbsp;</td>
                            <td></td>
                            <td width="30%"></td>
                        </table> */}
                   
                </div>
                {/* </div> */}
            </div>
        )
    }
}

export default Rent;