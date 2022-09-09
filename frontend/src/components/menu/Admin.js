import React from 'react';
import { Link } from 'react-router-dom';


class Admin extends React.Component{

    render(){
        return(
            <>
                <li className="nav-item"><Link to="/AddOwner" className="nav-link">เพิ่มผู้ประกอบการ</Link></li>
                <li className="nav-item"><Link to="/ShopType" className="nav-link">ประเภทร้านค้า</Link></li>
                <li className="nav-item"><Link to="/TypeFood" className="nav-link">ประเภทอาหาร</Link></li>
                <li className="nav-item"><Link to="/AddRole" className="nav-link">กำหนดสิทธิ์ผู้ใช้งาน</Link></li>
            </>
        )
    }
}

export default Admin;