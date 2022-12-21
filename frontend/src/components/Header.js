import React from 'react';
import { Link } from 'react-router-dom';
import Admin from './menu/Admin'
import Member from './menu/Member'
import Owner from './menu/Owner'
import { Redirect } from 'react-router';

const showMenu = (roleID) => {
    if(roleID === "1"){
        // window.location.reload();
        return(
            <>
                <li className="nav-item"><Link to="/AddOwner" className="nav-link">เพิ่มผู้ประกอบการ</Link></li>
                <li className="nav-item"><Link to="/ShopType" className="nav-link">ประเภทร้านค้า</Link></li>
                <li className="nav-item"><Link to="/TypeFood" className="nav-link">ประเภทอาหาร</Link></li>
                <li className="nav-item"><Link to="/AddRole" className="nav-link">กำหนดสิทธิ์ผู้ใช้งาน</Link></li>
                <li className="nav-item"><Link to="/logout" className="nav-link">ออกจากระบบ</Link></li>
            </>
        )
    } else if (roleID === "2"){
        // window.location.reload();
        return(
            <>
                <li className="nav-item"><Link to="/Shop" className="nav-link">ร้านค้า2</Link></li>
                <li className="nav-item"><Link to="/Menu" className="nav-link">เมนู2</Link></li>
                <li className="nav-item"><Link to="/logout" className="nav-link">ออกจากระบบ</Link></li>
            {/* <button onClick={this.sayHello}>ppp</button> */}
            </>
            // onClick={this.handleClick}
        )
    } else if (roleID === "3"){
        return (
            <>
                <li className="nav-item"><Link to="/Shop" className="nav-link">ร้านค้า3</Link></li>
                <li className="nav-item"><Link to="/Menu" className="nav-link">เมนู3</Link></li>
                <li className="nav-item"><Link to="/logout" className="nav-link">ออกจากระบบ</Link></li>
            </>
        )
    }
    else{
        return (
            <>
                <li className="nav-item"><Link to="/Register" class="nav-link">ลงทะเบียน</Link></li>
                <li className="nav-item"><Link to="/login" class="nav-link">เข้าสู่ระบบ</Link></li>
            </>
        )
    }
}


class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            roleID: localStorage.getItem('roleID')
        }
        // this.handleClick = this.handleClick.bind(this)
        // this.sayHello = this.sayHello.bind(this)
    }
    // sayHello() {
    //     alert('Hello!');
    // }
    // handleClick(){
    //     console.log("kk")
        // this.state = {
        //     memberID: localStorage.clear('memberID'),
        //     username: localStorage.clear('username'),
        //     name: localStorage.clear('name'),
        //     roleID: localStorage.clear('roleID')
        // }
        // this.setState({redirect: true})
        // return <Redirect to='/Shop' />
    // }

    render(){
        // console.log(this.state.roleID);
        // var ment = 
        if(this.state.redirect){
            return <Redirect to='/Shop' />
          }
        console.log(this.setState.data)
        // window.location.reload();
        return(
            // window.location.reload()
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                <a className="navbar-brand" href="index.html">Chopradu</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="/" className="nav-link">หน้าหลัก</a></li>
                        {/* {
                            (this.state.roleID == 1)? <Admin /> : (this.state.roleID == 2)? <Member /> : (this.state.roleID == 3)? <Owner /> :<></>
                        } */}
                        {showMenu(this.state.roleID)}
                        {/* <li className="nav-item"><a href="reservation.html" className="nav-link">Reservation</a></li> */}
                        
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

export default Header;