import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './assets/css/app.css';

//component
import Header from './components/header'
import HomePage from './components/pages/home'
import Service from './components/pages/service'
import About from './components/pages/about'
import Contact from './components/pages/contact'
//import Propoties from './components/pages/propoties'
import Propoties from './components/pages/coming'
import Admin from './components/pages/admin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/Service" component={Service} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Propoties" component={Propoties} />
            <Route path="/admin/properties" component={Admin} />
          </Switch>
      </div>
    );
  }
}

export default App;
