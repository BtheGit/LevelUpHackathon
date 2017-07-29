import React, { Component } from 'react';
import Login from './components/Login'
import Customer from './components/Customer'
import Business from './components/Business'
import 'purecss';
import './css/reset.css';
import './css/main.css';

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

  redirect = route => {
    this.setState({display: route})
  }

  renderLogin = () => {
    return (
      <Login
        redirect = {this.redirect}
      />
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
