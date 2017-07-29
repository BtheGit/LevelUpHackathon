import React, { Component } from 'react';
import Breadcrumb from '../partials/Breadcrumb';

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
				<Breadcrumb
					canReturn={true}
					goBack={() => {this.props.goto(QRDISPLAY)}}
				/>
				<div>My Stores</div>
				<div className="back-button" onClick={() => this.props.goto(QRDISPLAY)}>BACK</div>
			</div>
		)
	}
}

export default MyStores;
