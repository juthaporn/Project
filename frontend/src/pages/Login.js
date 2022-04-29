import React from 'react';
import axios from 'axios';
import setting from "../setting"

import { Redirect } from 'react-router';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
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

    handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
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
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <img class="card-img" src="img/recepie/recepie_details.png" alt="" />
                    </div>
                    <div class="col-lg-6">
                        <h2 class="contact-title">เข้าสู่ระบบ</h2>
                        <form class="form-contact contact_form" onSubmit={this.handleSubmit}>
                            <div class="row">
                                    <div class="form-group">
                                        <input class="form-control" name="username" placeholder="ชื่อผู้ใช้งาน" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" name="password" type="password" placeholder='รหัสผ่าน' onChange={this.handleChange} />
                                    </div>
                            </div>
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