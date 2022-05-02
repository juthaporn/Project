import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component{
    render(){
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
                        <li className="nav-item"><a href="/Shop" className="nav-link">ร้านค้า</a></li>
                        <li className="nav-item"><a href="/Menu" className="nav-link">เมนู</a></li>
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