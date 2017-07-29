import React, { Component } from 'react';

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}


	render() {
		return (
			<div>
				<div>LOGIN Screen</div>
				<div>
					<div className="login-button" onClick={() => this.props.redirect('CUSTOMER')}>CUSTOMER</div>
				</div>
				<div>
					<div className="login-button" onClick={() => this.props.redirect('BUSINESS')}>BUSINESS</div>
				</div>
			</div>
		)
	}
}

export default Login;