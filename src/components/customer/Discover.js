import React, { Component } from 'react';
import Breadcrumb from '../partials/Breadcrumb';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const QRDISPLAY = 'QRDISPLAY',
			DISCOVER 	= 'DISCOVER',
			MYSTORES 	= 'MYSTORES'

class Discover extends Component {
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
				<div>Discover</div>
			</div>
		)
	}
}

export default Discover;
