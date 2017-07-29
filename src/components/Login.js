import React, { Component } from 'react';
import '../css/login.css';

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}


	render() {
		return (
			<div id="login-view">
				<form id="login-form" className="pure-form">
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button
						className="pure-button pure-button-primary"
						onClick={() => this.props.redirect('CUSTOMER')}>
						CUSTOMER LOGIN
					</button>
				</form>
				<form id="login-form" className="pure-form">
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button
						className="pure-button pure-button-primary"
						onClick={() => this.props.redirect('BUSINESS')}>
						BUSINESS LOGIN
					</button>
				</form>
			</div>
		)
	}
}

export default Login;
