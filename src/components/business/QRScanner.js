import React, { Component } from 'react';
import ReactSVG from 'react-svg';

const QRSCANNER = 'QRSCANNER',
			STORES 	= 'STORES',
			CUSTOMERS 	= 'CUSTOMERS'

class QRScanner extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<div id="business-view" className="full-height-parent">
				<div id="qr-container">
					<div id="qr-scanner">
						QR SCANNER IMAGE/VIDEO
					</div>
				</div>
				<a id="button-stores" className="button-circle" onClick={() => this.props.goto(STORES)}>
					<span>Stores</span>
					<ReactSVG
				    path="/images/icon_discover.svg"
					/>
				</a>
				<a id="button-customers" className="button-circle" onClick={() => this.props.goto(CUSTOMERS)}>
					<span>Customers</span>
					<ReactSVG
				    path="/images/icon_stamps.svg"
					/>
				</a>
			</div>
		)
	}
}

export default QRScanner;
