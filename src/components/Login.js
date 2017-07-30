import React, { Component } from 'react';
import '../css/login.css';

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			customerForm: false,
			businessForm: false
		}
	}

	toggle = (type) => {
		this.setState({
			[type + 'Form'] : !this.state[type + 'Form']
		})
	}

	render() {
		return (
			<div id="login-view">
				<div id="logo">
					<img src="/images/logo.svg" />
				</div>

				<div id="customer-box" className="login-box">
					<a id="customer-button" className={'login-circle-button ' + (this.state.customerForm ? 'hidden' : '')}
						onClick = {() => { this.toggle('customer') }}>
						<span>Customer</span>
					</a>

					<form className={'pure-form login-form ' + (this.state.customerForm ? '' : 'hidden')}>
						<fieldset className="pure-group">
							<input type="email" placeholder="Email" />
							<input type="password" placeholder="Password" />
						</fieldset>
						<button
							className="pure-button pure-button-primary"
							onClick={() => this.props.redirect('CUSTOMER')}>
							Log In
						</button>
					</form>
				</div>

				<div id="business-box" className="login-box">
					<a id="business-button" className="login-circle-button"
						onClick = {() => { this.toggle('business') }}>
						<span>Business</span>
					</a>
				</div>

			</div>
		)
	}
}

export default Login;
