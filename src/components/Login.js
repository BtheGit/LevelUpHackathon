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
				<div id="customer-box">
					<a id="customer-button"
						onClick = {() => { this.toggle('customer') }}
						className = {(this.state.customerForm ? 'hidden' : '')}>
						<span>Customer</span>
					</a>
					<form id="login-form" className={'pure-form ' + (this.state.customerForm ? '' : 'hidden')}>
						<fieldset className="pure-group">
							<input type="email" placeholder="Email" />
							<input type="password" placeholder="Password" />
						</fieldset>
						<button
							className="pure-button pure-button-primary"
							onClick={() => this.props.redirect('CUSTOMER')}>
							CUSTOMER LOGIN
						</button>
					</form>
				</div>
				<div id="business-box">
					<a id="business-button" onClick = {() => { this.toggle('business') }}>
						<span>Business</span>
					</a>
				</div>
			</div>
		)
	}
}

export default Login;
