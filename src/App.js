import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
  } from 'react-router-dom';
import Login from './login'
import Home from './home'
import Register from './register'
import Transaction from './transaction'
import Users from './users'

class App extends React.Component {
  render() {
    return (
      <div className="App">
      
      <BrowserRouter>
   
      

      <Switch>
        <Route path="/" exact={true}>
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/transaction">
          <Transaction/>
        </Route>
        <Route path="/users">
          <Users/>
        </Route>
      </Switch>


     </BrowserRouter>
      </div>
    );
  }
}

export default App;
