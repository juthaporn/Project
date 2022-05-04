import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class AddRent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        rentalDetail: '',
        month:'',
        waterBill: '',
        waterUnit:'',
        electricityBill: '',
        powerUnit:'',
        cleaningFee: '',
        wasteDisposalFee: '',
        shopName: ''
      }
    }

    // handleChange = (e) => {
    //   console.log(e.target.name, e.target.value);
    //   let name = e.target.name;
    //   let value = e.target.value;
    //   this.setState({
    //     [name]: value
    //   });
    // }

    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   axios.post('http://localhost:3000/admin/add-rent', this.state).then(res => {
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
              <div className="row">
                <div class="col-lg-6">
                  <br />
                  <img class="card-img" src="img/video/big.png" alt="" />
                </div>
                <div class="col-lg-6">
                  <h2 class="contact-title">เพิ่มค่าน้ำ - ค่าไฟ</h2>
                  <form class="form-contact contact_form" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label>ชื่อร้านค้า</label>
                      {/* <input name="shopID" class="form-control" placeholder="รหัสร้านค้า" onChange={this.handleChange} required /> */}
                      <select id='shopName'>
                        <option value={this.shopName}></option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>คำอธิบายเพิ่มเติม</label>
                      <input name="rentalDetail" class="form-control" placeholder="เช่น เดือนนี้ค่าน้ำปรับขึ้นหน่วยละ 1 บาท" onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                      <label>ประจำเดือน</label>
                      <input type="month" name="month" min="2018-01" class="form-control"  onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>ราคาค่าน้ำต่อหน่วย</label>
                      <input name="waterBill" class="form-control" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>จำนวนหน่วยค่าน้ำ</label>
                      <input name="waterBill" class="form-control" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>ราคาค่าไฟต่อหน่วย</label>
                      <input name="electricityBill" class="form-control" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>จำนวนหน่วยค่าไฟ</label>
                      <input name="waterBill" class="form-control" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>ค่ากำจัดขยะ</label>
                      <input name="cleaningFee" class="form-control" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>ค่าทำความสะอาด</label>
                      <input name="wasteDisposalFee" class="form-control" onChange={this.handleChange} required />
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

export default AddRent;