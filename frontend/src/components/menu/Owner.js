import React from 'react';
import { Link } from 'react-router-dom';


class Owner extends React.Component{

    render(){
        return(
            <>
                <li className="nav-item"><Link to="/Shop" className="nav-link">ร้านค้า3</Link></li>
                <li className="nav-item"><Link to="/Menu" className="nav-link">เมนู3</Link></li>
            </>
        )
    }
}

export default Owner;