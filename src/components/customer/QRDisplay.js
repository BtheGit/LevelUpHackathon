import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import ReactSVG from 'react-svg';

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
					<div id="qr-code">
						<QRCode value="http://facebook.github.io/react/" />
					</div>
				</div>
				<a id="button-discover" className="button-circle" onClick={() => this.props.goto(DISCOVER)}>
					<span>Discover</span>
					<ReactSVG
				    path="/images/icon_discover.svg"
					/>
				</a>
				<a id="button-mystores" className="button-circle" onClick={() => this.props.goto(MYSTORES)}>
					<span>My Stores</span>
					<ReactSVG
				    path="/images/icon_stamps.svg"
					/>
				</a>
			</div>
		)
	}
}

export default QRDisplay;
