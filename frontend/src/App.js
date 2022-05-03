import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Header from './components/Header';
import Banner from './components/Banner';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import Shopdetail from './pages/Shopdetail';
import Menu from './pages/Menu';
import Typefood from './pages/Typefood';
import Order from './pages/Order';
import AddTypeFood from './pages/AddTypeFood';
import Admin from './pages/Admin';

class App extends React.Component {

  render(){
    return(
      <Router>
        <Header />
        <Banner />
        
        <Switch>
        <Route path="/Typefood">
            <Typefood />
          </Route>
        <Route path="/Menu">
            <Menu />
          </Route>
        <Route path="/Shop">
            <Shop />
          </Route>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/Order">
            <Order />
          </Route>
          <Route path="/Shopdetail">
            <Shopdetail />
          </Route>
          <Route path="/AddTypeFood">
            <AddTypeFood />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
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
