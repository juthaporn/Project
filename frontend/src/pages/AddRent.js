import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class AddRent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        rentalDetail: '',
        waterBill: '',
        electricityBill: '',
        cleaningFee: '',
        wasteDisposalFee: '',
        shopID: ''
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
              <div className="row justify-content-center">
                <h2 class="contact-title">เพิ่มค่าน้ำ - ค่าไฟ</h2>
                <form class="form-contact contact_form" onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label>รหัสร้านค้า</label>
                  <input name="shopID" class="form-control" placeholder="รหัสร้านค้า" onChange={this.handleChange} required />
                </div>
                <div class="form-group">
                  <label>คำอธิบายเพิ่มเติม</label>
                  <input name="rentalDetail" class="form-control" placeholder="เช่น ค่าไฟหน่วยละ 5.5 บาท ค่าน้ำหน่วยละ 11 บาท" onChange={this.handleChange} required />
                </div>
                <div class="form-group">
                  <label>ค่าน้ำ</label>
                  <input name="waterBill" class="form-control" onChange={this.handleChange} required />
                </div>
                <div class="form-group">
                  <label>ค่าไฟ</label>
                  <input type="text" name="electricityBill" class="form-control" onChange={this.handleChange} required />
                </div>
                <div class="form-group">
                  <label>ค่ากำจัดขยะ</label>
                  <input type="text" name="cleaningFee" class="form-control" onChange={this.handleChange} required />
                </div>
                <div class="form-group">
                  <label>ค่าทำความสะอาด</label>
                  <input type="text" name="wasteDisposalFee" class="form-control" onChange={this.handleChange} required />
                </div>
                <br />
                <button type="submit" class="btn btn-primary">บันทึก</button>
              </form>
            </div>
          </div>
        </main>
        )
    }
}

export default AddRent;