import React from 'react';
import axios from 'axios';
import setting from "../setting"

import { Redirect } from 'react-router';

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {
                username: '',
                password: ''
            },
            isAuth: false,
            roleID: 0,
            first_page: [
                '',
                '/Register', // admin
                '',             // 
                '',
                ''
            ],
            redirect: ''
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.name, event.target.value);
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
        case 'username': 
            errors.username = value.length == 0
                ? 'required'
                : '';
            break;
        case 'password': 
            errors.password = value.length < 6
                ? 'Password must be 8 characters long!'
                : '';
            break;
        default:
            break;
        }

        this.setState({errors, [name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if(validateForm(this.state.errors)) {
            axios.post(setting.IP+'login', this.state).then(res => {
                console.log(res.data);
                if(res.data.data){
                    let user_data = res.data.data;
                    localStorage.setItem("memberID", user_data.memberID);
                    localStorage.setItem("username", user_data.username);
                    localStorage.setItem("name", user_data.name);
                    localStorage.setItem("roleID", user_data.roleID);
                    alert('เข้าสู่ระบบสำเร็จ');
                    this.setState({
                        isAuth: true,
                        roleID: parseInt(user_data.roleID),
                        redirect: this.state.first_page[parseInt(user_data.roleID)]
                    });
                }else{
                    alert('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
                }
            }).catch(error => {
                console.log(error);
            });
        }else{
            console.error('Invalid Form')
        }
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        const {errors} = this.state;
        return(
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <img class="card-img" src="img/recepie/recepie_details.png" alt="" />
                    </div>
                    <div class="col-lg-6">
                        <h2 class="contact-title">เข้าสู่ระบบ</h2>
                        <form class="form-contact contact_form" onSubmit={this.handleSubmit}>
                            {/* <div class="row"> */}
                                    <div class="form-group">
                                        <input class="form-control" name="username" placeholder="ชื่อผู้ใช้งาน" onChange={this.handleChange} />
                                        {errors.username.length > 0 && <span className='error'>{errors.username}</span>}
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" name="password" type="password" placeholder='รหัสผ่าน' onChange={this.handleChange} />
                                        {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                                    </div>
                            {/* </div> */}
                            <div class="form-group mt-3 text-center">
                                <button type="submit" class="button button-contactForm btn_4 boxed-btn">เข้าสู่ระบบ</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
            
    }
}

export default Login;