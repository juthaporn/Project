import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'

class AddShop extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data:[],
        shopType:[]
      }
    }

    componentDidMount(){
      this.getData()
      this.getShopType()
      console.log("MemberID",this.props.match.params.id)
    }

    getData = () => {
      var x = this;
      axios.get("http://localhost:3000/member/getOneMember/"+this.props.match.params.id).then((res) => {
        this.setState({data: res.data.data[0]});
        console.log(this.state.data.name)
      }).catch((error) => {
        console.log(error);
      });
    }

    getShopType = () => {
      axios.get('http://localhost:3000/shopType/getShopType')
      .then(res => {
        const option = res.data.data.map((d) => ({
          "value": d.shopTypeID,
          "label": d.typeName
        }))
        this.setState({shopType: option})
      })
    }

    //เพิ่มข้อมูลต่อได้เลย
    handleChange = (e) => {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value
      })
    }

    handleChangeShopType = (e) => {
      this.setState({shopTypeID:e.value})
    }

    handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3000/shop/createShop', {
        shopName: this.state.shopName,
        shopPhone: this.state.shopPhone,
        shopDetail: this.state.shopDetail,
        openingTime: this.state.openingTime,
        shopRentalContract: this.state.shopRentalContract,
        memberID: this.props.match.params.id,
        shopTypeID: this.state.shopTypeID
      }).then(res => {
        console.log(res)
        if(res.data.message=='success'){
          alert('เพิ่มข้อมูลสำเร็จ')
          this.setState({redirect: true})
        }else{
          alert('ข้อมูลซ้ำ')
          this.setState({redirect: false})
        }
      }).catch(err => {
        console.log(err)
      })
    }

    render(){
        return(
          <main>
            <div class="container">
              <div className="row">
                <div class="col-lg-6">
                  <br />
                  <br />
                  <img class="card-img" src="img/video/big.png" alt="" />
                </div>
                <div class="col-lg-6">
                  <h2 class="contact-title">เพิ่มร้านค้า</h2>
                  <form class="form-contact contact_form" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label>ชื่อร้าน</label>
                      <input  class="form-control"  name="shopName" placeholder="ชื่อร้าน" onChange={this.handleChange} pattern="^[ก-๏\s]+$" title="กรุณากรอกชื่อร้านเป็นภาษาไทย" required />
                    </div>
                    <div class="form-group">
                      <label>เบอร์โทร</label>
                      <input  class="form-control" name="shopPhone" placeholder="+66" onChange={this.handleChange} required maxLength={10} />
                    </div>
                    <div class="form-group">
                      <label>คำอธิบายร้านค้า</label>
                      <input class="form-control" name="shopDetail" placeholder="คำอธิบายร้านค้า" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>เวลาเปิด-ปิด</label>
                      <input class="form-control" name="openingTime" placeholder="เช่น 10.00 - 12.00 " onChange={this.handleChange} required maxLength={10} />
                    </div>
                    <div class="form-group">
                      <label>ประเภทร้านค้า</label>
                       <br></br>
                      <Select 
                        options={this.state.shopType}
                        onChange={this.handleChangeShopType.bind(this)}
                      />
                      {/* <input class="form-control" name="typeName" placeholder="เช่น น้ำ ผลไม้" onChange={this.handleChange} required /> */}
                     
                    </div>
                    <div class="form-group">
                      <label>สัญาเช่าร้าน</label>
                      <input class="form-control" name="shopRentalContract" placeholder="เช่น 11 มกราคม 2563 - 11 มกราคม 2565" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>ชื่อผู้ประกอบการ</label>
                      <input class="form-control" name="name" onChange={this.handleChange} value={this.state.data.name} required />
                    </div>
                    <div class="form-group text-center">
                      <button type="submit" class="button button-contactForm btn_4 boxed-btn">บันทึก</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )
    }
}

export default AddShop;