import React, { Component } from 'react';

const QRDISPLAY = 'QRDISPLAY',
			DISCOVER 	= 'DISCOVER',
			MYSTORES 	= 'MYSTORES'

class MyStores extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<div>My Stores</div>
				<div className="back-button" onClick={() => this.props.goto(QRDISPLAY)}>BACK</div>
			</div>
		)
	}
}

export default MyStores;