import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class AddShop extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        shopName: '',
        shopPhone: '',
        shopDetail: '',
        openingTime: '',
        shopType: '',
        shopRentalContract: '',
        memberID: '',
        data: []
      }
    }

    handleChange = (e) => {
      console.log(e.target.name, e.target.value);
      let name = e.target.name;
      let value = e.target.value;
      this.setState({
        [name]: value
      });
    }

    // getData = () => {
    //   var x = this;
    //   axios.get("http://localhost:3000/admin/member").then((res) => {
    //     this.setState({data: res.data.data});
    //     console.log(this.state.data)
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // }

    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   axios.post('http://localhost:3000/admin/add-shop', this.state).then(res => {
    //     console.log(res);
    //     alert('Susscess');
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // }
    
    render(){
        return(
          <main>
                <div class="container">
                  <div className="row justify-content-center">
                    {/* <div class="col-md-7 col-lg-5"> */}
                      <h2 class="contact-title">เพิ่มร้านค้า</h2>
                        {/* <div className="col-md-6"> */}
                        <form class="form-contact contact_form" onSubmit={this.handleSubmit}>
                          <div class="form-group">
                            <label>ชื่อร้าน</label>
                            <input  class="form-control"  name="shopName" placeholder="ชื่อร้าน" onChange={this.handleChange} required />
                          </div>
                          <div class="form-group">
                            <label>เบอร์โทร</label>
                            <input  class="form-control" name="shopPhone" placeholder="+66" onChange={this.handleChange} required />
                          </div>
                          <div class="form-group">
                            <label>คำอธิบายร้านค้า</label>
                            <input class="form-control" name="shopDetail" placeholder="คำอธิบายร้านค้า" onChange={this.handleChange} required />
                          </div>
                          <div class="form-group">
                            <label>เวลาเปิด-ปิด</label>
                            <input class="form-control" name="openingTime" placeholder="เช่น 10.00 - 12.00 " onChange={this.handleChange} required />
                          </div>
                          <div class="form-group">
                            <label>ประเภทร้านค้า</label>
                            <input class="form-control" name="shopType" placeholder="เช่น น้ำ ผลไม้" onChange={this.handleChange} required />
                          </div>
                          <div class="form-group">
                            <label>สัญาเช่าร้าน</label>
                            <input class="form-control" name="shopRentalContract" placeholder="เช่น 11 มกราคม 2563 - 11 มกราคม 2565" onChange={this.handleChange} required />
                          </div>
                          <div class="form-group">
                            <label>รหัสผู้ประกอบการ</label>
                            
                            {/* {this.state.data.map(item => ( 
                              // {/* <input type="text" name="name" class="form-control" onChange={this.handleChange} value = required /> 
                              // <div class="dropdown-menu" aria-labelledby ='dropdownMenu'>
                              //   <a class="dropdown-menu">{item.name}</a>
                              // </div>*/}
                              
                              {/* <h6>{item.name}ll</h6> */}
                            {/* ))}   */}
                          </div>
                          <br />
                          <button type="submit" class="btn btn-primary">บันทึก</button>
                        </form>
                        {/* </div> */}
                    </div>
                  {/* </div> */}
                </div>
          </main>
        )
    }
}

export default AddShop;