import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Shop from './pages/Shop';
import Shopdetail from './pages/ShopDetail';
import Menu from './pages/Menu';
import Typefood from './pages/Typefood';
import ShopType from './pages/ShopType';
import Rent from './pages/Rent';
import YearRent from './pages/YearRent';
import AddOwner from './pages/AddOwner';
import AddProduct from './pages/AddProduct';
import AddRent from './pages/AddRent';
import AddShop from './pages/AddShop';
import AddShopType from './pages/AddShopType';
import AddTypeFood from './pages/AddTypeFood';
import AddYearRent from './pages/AddYearRent';
import AddRole from './pages/AddRole';
import EditProduct from './pages/EditProduct';
import EditShop from './pages/EditShop';
import EditTypeFood from './pages/EditTypeFood';
import Admin from './pages/Admin';
import ShopOwner from './pages/ShopOwner';
import ShopByOwner from './pages/ShopByOwner';
import AdminShopDetail from './pages/AdminShopDetail';
import OrderOwner from './pages/OrderOwner';
import OrderStatus from './pages/OrderStatus';
import ShopOwnerDetail from './pages/ShopOwnerDetail';
import Order from './pages/Order';
import MenuSelect from './pages/MenuSelect';
import ShopMember from './pages/ShopMember';
import OrderOwnerEdit from './pages/OrderOwnerEdit';
import Cart from './pages/Cart';
import SelectShopByOwner from  './pages/SelectShopByOwner';


class App extends React.Component {

  render(){
    return(
      <Router>
        <Header />
        <Banner />
        
        <Switch>
        <Route path="/SelectShopByOwner/">
            <SelectShopByOwner/>
            </Route>
        <Route path="/Cart">
            <Cart/>
            </Route>
        <Route path="/OrderOwnerEdit">
            <OrderOwnerEdit />
            </Route>
        <Route path="/ShopMember">
            <ShopMember />
            </Route>
        <Route path="/MenuSelect/:shopID/:id" component={MenuSelect}>
            </Route>
            {/* <Route path="/Order/:product/:number" component={Order}>
              
            </Route> */}
        <Route path="/Order/:orderID">
            <Order />
            </Route>
        <Route path="/ShopOwnerDetail">
            <ShopOwnerDetail />
            </Route>
        <Route path="/OrderStatus/:product/:number" component={OrderStatus}>
            </Route>
        <Route path="/OrderOwner">
            <OrderOwner />
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
        <Route path="/ShopType">
          <ShopType />
        </Route>
        <Route path="/Rent/:id" component={Rent}>
        </Route>
        <Route path="/YearRent/:id" component={YearRent}>
        </Route>
        <Route path="/ShopByOwner/:id" component={ShopByOwner} >
        </Route>
        <Route path="/Menu/:id" component={Menu}>
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
          <Route path="/AddOwner">
            <AddOwner />
          </Route>
          <Route path="/AddProduct">
            <AddProduct />
          </Route>
          <Route path="/AddRent/:id" component={AddRent}>
            {/* <AddRent /> */}
          </Route>
          <Route path="/AddShop/:id" component={AddShop}>
            {/* <AddShop /> */}
          </Route>
          <Route path="/AddShopType">
            <AddShopType />
          </Route>
          <Route path="/AddTypeFood">
            <AddTypeFood />
          </Route>
          <Route path="/AddYearRent/:id" component={AddYearRent}>
            {/* <AddYearRent /> */}
          </Route>
          <Route path="/AddRole">
            <AddRole />
          </Route>
          <Route path="/EditProduct">
            <EditProduct />
          </Route>
          <Route path="/EditShop">
            <EditShop />
          </Route>
          <Route path="/EditTypeFood/:id" component={EditTypeFood}>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login/">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch><Footer />
      </Router>
    )
  }
}

export default App;
