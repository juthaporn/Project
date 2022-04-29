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


class App extends React.Component {

  render(){
    return(
      <Router>
        <Header />
        <Banner />

        <Switch>
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
