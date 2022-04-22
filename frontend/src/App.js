import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Header from './components/Header';
import Banner from './components/Banner';

class App extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return(
      <Router>

        <Header/>
        <Banner/>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}


export default App;
