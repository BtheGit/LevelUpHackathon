import React, { Component } from 'react';
import QRScanner from './business/QRScanner';
import Stores from './business/Stores';
import Customers from './business/Customers';


const QRSCANNER = 'QRSCANNER',
			STORES 	= 'STORES',
			CUSTOMERS 	= 'CUSTOMERS'

class Business extends Component {
	constructor(props){
		super(props);
		this.state = {
			display: QRSCANNER
		}
	}

	goto = (page) => {
		this.setState({display: page})
	}	

	renderQRScanner = () => {
		return (
			<QRScanner 
				goto={this.goto}
			/>
		)
	}

	renderStores = () => {
		return (
			<Stores
				goto={this.goto}
			/>
		)
	}

	renderCustomers = () => {
		return (
			<Customers
				goto={this.goto}
			/>
		)
	}

	render() {
		return (
			<div className="full-height-parent">			
				{this.state.display === QRSCANNER ? this.renderQRScanner()
						: this.state.display === STORES ? this.renderStores()
						: this.renderCustomers()
				}				
			</div>
		)
	}
}

export default Business;