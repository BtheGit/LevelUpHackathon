import React, { Component } from 'react';
import Discover from './customer/Discover';
import MyStores from './customer/MyStores';
import QRDisplay from './customer/QRDisplay';
import '../css/customer.css';

const QRDISPLAY = 'QRDISPLAY',
			DISCOVER 	= 'DISCOVER',
			MYSTORES 	= 'MYSTORES'

class Customer extends Component {
	constructor(props){
		super(props);
		this.state = {
			display: QRDISPLAY
		}
	}

	goto = (page) => {
		this.setState({display: page})
	}

	renderQRDisplay = () => {
		return (
			<QRDisplay
				goto={this.goto}
			/>
		)
	}

	renderDiscover = () => {
		return(
			<Discover
				goto={this.goto}
			/>
		)
	}

	renderMyStores = () => {
		return (
			<MyStores
				goto={this.goto}
			/>
		)
	}

	render() {
		return (
			<div className="full-height-parent">
				{this.state.display === QRDISPLAY ? this.renderQRDisplay()
						: this.state.display === DISCOVER ? this.renderDiscover()
						: this.renderMyStores()
				}
			</div>
		)
	}
}

export default Customer;
