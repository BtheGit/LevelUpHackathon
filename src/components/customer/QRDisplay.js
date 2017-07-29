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
			<div className="QRDisplay-container">
				<div className="QR-container">
					<div className="QR-code">QR CODE</div>
				</div>
				<div className="Discover-link" onClick={() => this.props.goto(DISCOVER)}>DISC</div>
				<div className="MyStores-link" onClick={() => this.props.goto(MYSTORES)}>STORES</div>
			</div>			
		)
	}
}

export default QRDisplay;
