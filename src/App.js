import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Customer from './components/Customer'
import Business from './components/Business'

const LOGIN     = 'LOGIN',
      CUSTOMER  = 'CUSTOMER',
      BUSINESS  = 'BUSINESS';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: LOGIN,
    }
  }

  renderLogin = () => {
    return (
      <Login />
    )
  }

  renderCustomer = () => {
    return (
      <Customer />
    )
  }

  renderBusiness = () => {
    return (
      <Business />
    )
  }

  render() {
    return (
      <div>
        { this.state.display === LOGIN ? this.renderLogin()
          : this.state.display === CUSTOMER ? this.renderCustomer()
          : this.renderBusiness()
        }
      </div>
    );
  }
}

export default App;
