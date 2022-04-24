import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Header from './components/Header';
import Banner from './components/Banner';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends React.Component {
  render(){
    return(
      <Router>

        <Header/>
        <Banner/>
้
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}


export default App;
