import React from 'react';
import { Link } from 'react-router-dom';
import Admin from './menu/Admin'
import Member from './menu/Member'
import Owner from './menu/Owner'


class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            roleID: localStorage.getItem('roleID')
        }
    }

    render(){
        console.log(this.state.roleID);
        // var ment = 
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                <a className="navbar-brand" href="index.html">Chopradu</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="/" className="nav-link">หน้าหลัก</a></li>
                        {
                            (this.state.roleID == 1)? <Admin /> : (this.state.roleID == 2)? <Member /> : (this.state.roleID == 3)? <Owner /> :<></>
                        }
                        {/* <li className="nav-item"><a href="reservation.html" className="nav-link">Reservation</a></li> */}
                        <li className="nav-item"><Link to="/Register" class="nav-link">ลงทะเบียน</Link></li>
                        <li className="nav-item"><Link to="/Login" class="nav-link">เข้าสู่ระบบ</Link></li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

export default Header;