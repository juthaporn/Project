import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class AddOwner extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        username: '',
        password: '',
        name: '',
        phone: ''
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
    //   axios.post('http://localhost:3000/admin/add-member', this.state).then(res => {
    //     console.log(res);
    //     alert('Susscess');
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // }
    
    render(){
        return(
          <div class="container">
            <div className="row">
              <div class="col-lg-6">
                <br />
                <img class="card-img" src="img/video/big.png" alt="" />
              </div>
              <div class="col-lg-6">
                <h2 class="contact-title">เพิ่มผู้ประกอบการ</h2>
                  <form class="form-contact contact_form" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label>ชื่อผู้ประกอบการ</label>
                      <input name="name" class="form-control" placeholder="ชื่อผู้ประกอบการ" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>เบอร์โทร</label>
                      <input name="phone" class="form-control" placeholder="+66" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>ชื่อผู้ใช้งาน</label>
                      <input name="username" class="form-control" placeholder="ชื่อผู้ใช้งาน" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>รหัสผ่าน</label>
                      <input name="password" class="form-control" placeholder="รหัสผ่าน" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group text-center">
                      <button type="submit" class="button button-contactForm btn_4 boxed-btn">บันทึก</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

        )
    }
}

export default AddOwner;