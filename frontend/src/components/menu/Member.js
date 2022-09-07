import React from 'react';
import { Link } from 'react-router-dom';


class Member extends React.Component{

    render(){
        return(
            <>
                <li className="nav-item"><Link to="/Shop" className="nav-link">ร้านค้า2</Link></li>
                <li className="nav-item"><Link to="/Menu" className="nav-link">เมนู2</Link></li>
            </>
        )
    }
}

export default Member;