import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                <a className="navbar-brand" href="index.html">Kusina</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="menu.html" className="nav-link">Specialties</a></li>
                        <li className="nav-item"><a href="reservation.html" className="nav-link">Reservation</a></li>
                        <li className="nav-item"><a href="/Register" className="nav-link">ลงทะเบียน</a></li>
                        <li className="nav-item"><a href="/Login" className="nav-link">เข้าสู่ระบบ</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

export default Header;