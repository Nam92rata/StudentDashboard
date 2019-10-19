import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import HomePage from './components/homePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/HomePage' component={HomePage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

