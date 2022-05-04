import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            username: '',
            password: ''
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
  
    //   handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:3000/user/add-user', this.state).then(res => {
    //       console.log(res);
    //       alert('Susscess');
    //     }).catch(error => {
    //       console.log(error);
    //     });
    //   }
    
    render(){
        return(

            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <br />
                        <img class="card-img" src="img/video/big.png" alt="" />
                    </div>
                    <div class="col-lg-6">
                        <h2 class="contact-title">ลงทะเบียน</h2>
                        <form class="form-contact contact_form">
                            {/* <div class="row"> */}
                                <div class="form-group">
                                    <input class="form-control" name="name" placeholder = 'ชื่อ-นามสกุล' />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" name="phone" placeholder = 'เบอร์โทรศัพท์' />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" name="username" placeholder = "ชื่อผู้ใช้งาน" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" name="password" placeholder = 'รหัสผ่าน' />
                                </div>
                            {/* </div> */}
                            {/* <div class="form-group mt-3 text-center"> */}
                                <button type="submit" class="button button-contactForm btn_4 boxed-btn">ลงทะเบียน</button>&nbsp;
                                มีบัญชีผู้ใช้อยู่แล้วใช่หรือไม่&nbsp; 
                                <Link to="/Login" class="button button-contactForm btn_4 boxed-btn">เข้าสู่ระบบ</Link>
                            {/* </div> */}
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Register;