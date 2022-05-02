import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';

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
            <div className="row justify-content-center">
              <div class="col-md-7 col-lg-5">
                <h3 class="mb-4">เพิ่มผู้ประกอบการ</h3>
                  <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label>ชื่อผู้ประกอบการ</label>
                      <input type="text" name="name" class="form-control" placeholder="ชื่อผู้ประกอบการ" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>เบอร์โทร</label>
                      <input type="text" name="phone" class="form-control" placeholder="+66" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>ชื่อผู้ใช้งาน</label>
                      <input type="text" name="username" class="form-control" placeholder="ชื่อผู้ใช้งาน" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>รหัสผ่าน</label>
                      <input type="text" name="password" class="form-control" placeholder="รหัสผ่าน" onChange={this.handleChange} required />
                    </div><br />
                    <button type="submit" class="btn btn-primary">บันทึก</button>
                  </form>
                        {/* </div> */}
                </div>
              </div>
            </div>

        )
    }
}

export default AddOwner;