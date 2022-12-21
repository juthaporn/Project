// import React from 'react';
import { Link } from 'react-router-dom';


import React from 'react'

export default function Owner() {
    console.log('owner')

  return (
    <>
                <li className="nav-item"><Link to="/Shop" className="nav-link">ร้านค้า3</Link></li>
                <li className="nav-item"><Link to="/Menu" className="nav-link">เมนู3</Link></li>
            </>
  )
}



// class Owner extends React.Component{

//     componentDidMount(){
//         console.log('เขา้ไหม')
//     }

//     render(){
//         return(
//             <>
//                 <li className="nav-item"><Link to="/Shop" className="nav-link">ร้านค้า3</Link></li>
//                 <li className="nav-item"><Link to="/Menu" className="nav-link">เมนู3</Link></li>
//             </>
//         )
//     }
// }

// export default Owner;