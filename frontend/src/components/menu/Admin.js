import React from 'react';
import { Link } from 'react-router-dom';


class Admin extends React.Component{

    render(){
        return(
            <>
                <li className="nav-item"><Link to="/Shop" className="nav-link">ร้านค้า</Link></li>
                <li className="nav-item"><Link to="/Menu" className="nav-link">เมนู</Link></li>
            </>
        )
    }
}

export default Admin;