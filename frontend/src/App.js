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
import Shopdetail from './pages/ShopDetail';
import Menu from './pages/Menu';
import Typefood from './pages/Typefood';
import AddTypeFood from './pages/AddTypeFood';
import Admin from './pages/Admin';
import ShopOwner from './pages/ShopOwner';
import AdminShopDetail from './pages/AdminShopDetail';
import MonthlyRentalfee from './pages/MonthlyRentalfee';
import OrderOwner from './pages/OrderOwner';
import OrderStatus from './pages/OrderStatus';
import ShopOwnerDetail from './pages/ShopOwnerDetail';

class App extends React.Component {

  render(){
    return(
      <Router>
        <Header />
        <Banner />
        
        <Switch>
        <Route path="/ShopOwnerDetail">
            <ShopOwnerDetail />
            </Route>
        <Route path="/ShopOwnerDetail">
            <ShopOwnerDetail />
            </Route>
        <Route path="/OrderStatus">
            <OrderStatus />
            </Route>
        <Route path="/OrderOwner">
            <OrderOwner />
          </Route>
        <Route path="/MonthlyRentalfee">
            <MonthlyRentalfee />
          </Route>
        <Route path="/AdminShopDetail">
            <AdminShopDetail />
          </Route>
        <Route path="/ShopOwner">
            <ShopOwner />
          </Route>
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
