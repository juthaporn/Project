import React from 'react';
import axios from 'axios';
import setting from "../setting"
// import Header from '../components/Header';

import { Redirect } from 'react-router';

class Logout extends React.Component {
    constructor(props){
        super(props);
        // window.location.reload();
        this.state = {
          memberID: localStorage.clear('memberID'),
          username: localStorage.clear('username'),
          name: localStorage.clear('name'),
          roleID: localStorage.clear('roleID')
        }
        // window.location.href('/shop')
    }

    render() {
        window.location.assign("/");
        // if(this.state.redirect){
            // return <Redirect to='/' />
            //  <Header />
        // }
        return <></>
        
    }


}

export default Logout;