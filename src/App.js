import React, { Component } from 'react';
import FormLogin from './ComponentLogin/formLogin';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  state={
    FormLogin:FormLogin
  }
  render(){
    return (
      <div>
        <Router>
          <Route exact path="/">
            <div>
              <FormLogin />
            </div>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
