import React, { Component } from 'react';

const QRDISPLAY = 'QRDISPLAY',
			DISCOVER 	= 'DISCOVER',
			MYSTORES 	= 'MYSTORES'


class QRDisplay extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<div id="customer-view" className="full-height-parent">
				<div id="qr-container">
					<div id="qr-code">QR CODE</div>
				</div>
				<a id="button-discover" className="button-circle" onClick={() => this.props.goto(DISCOVER)}>
					<span>Discover</span>
				</a>
				<a id="button-mystores" className="button-circle" onClick={() => this.props.goto(MYSTORES)}>
					<span>My Stores</span>
				</a>
			</div>
		)
	}
}

export default QRDisplay;
