import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';

class AddYearRent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        rentDetail: '',
        rentalFee: '',
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
              <div className="row justify-content-center">
                <div class="col-md-7 col-lg-5">
                  <h3 class="mb-4">เพิ่มค่าเช่าร้าน</h3>
                  <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label>รหัสร้านค้า</label>
                      <input type="text" name="shopID" class="form-control" placeholder="รหัสร้านค้า" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>คำอธิบายเพิ่มเติม</label>
                      <input type="text" name="rentDetail" class="form-control" placeholder="เช่น ค่าเช่าร้านประจำปี 2564" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>ค่าเช่าร้าน</label>
                      <input type="text" name="rentalFee" class="form-control" onChange={this.handleChange} required />
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary">บันทึก</button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )
    }
}

export default AddYearRent;