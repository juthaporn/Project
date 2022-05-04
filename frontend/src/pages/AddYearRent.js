import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class AddYearRent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        rentDetail: '',
        rentalFee: '',
        year:'',
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
    //   axios.post('http://localhost:3000/admin/add-yearRent', this.state).then(res => {
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
                  <h2 class="contact-title">เพิ่มค่าเช่าร้าน</h2>
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
                      <input name="rentDetail" class="form-control" placeholder="เช่น ค่าเช่าร้านประจำปี 2564" onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                      <label>ปี</label>&nbsp;&nbsp;&nbsp;
                      {/* <input name="year" class="form-control" placeholder="เช่น ค่าเช่าร้านประจำปี 2564" onChange={this.handleChange} required /> */}
                      <select id='year'>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>ค่าเช่าร้าน</label>
                      <input name="rentalFee" class="form-control" onChange={this.handleChange} required />
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

export default AddYearRent;