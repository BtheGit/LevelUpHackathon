import React, { Component } from 'react';
import Login from './components/Login'
import Customer from './components/Customer'
import Business from './components/Business'
import 'purecss';
import './css/reset.css';

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

  switchView = (view) => {
    this.setState({
      display: view
    });
  }

  renderLogin = () => {
    return (
      <Login switchView={this.switchView}/>
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
