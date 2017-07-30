import React, { Component } from 'react';
import Breadcrumb from '../partials/Breadcrumb';
import placesDB from '../../db/places_DB';
import mapDB from '../../db/map';

const QRDISPLAY = 'QRDISPLAY',
			DISCOVER 	= 'DISCOVER',
			MYSTORES 	= 'MYSTORES'

const google = window.google;

class Discover extends Component {
	constructor(props){
		super(props);
		// this.googleAPI = null;
		this.map = null;
		this.state = {
			map: null,
			isLoaded: false
		}
	}

	buildMap = () => {
    this.map = new google.maps.Map(this.refs.map, {
      center: mapDB.startLocation,
      zoom: mapDB.zoomLevel,
      mapTypeControl: false,
      styles: mapDB.styles['grayscaleLight']
    });
	}

	buildMarkers = () => {
		placesDB.map(place => {
	    const marker = new google.maps.Marker({
	        position: place.position,
	        id: place.id,
	        map: this.map,
	        title: place.title
	    });
		})
	}

	componentDidMount = () => {
    const initializeStore = new Promise((resolve, reject) => {
    resolve()
    })
    .then(() => {
    	this.buildMap();
    })
    .then(() => {
    	this.buildMarkers();
    })

	}


	render() {
		const mapStyle = {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: 'auto',
			height: '700px'
		}
		return (
			<div>
				<Breadcrumb
					canReturn={true}
					goBack={() => {this.props.goto(QRDISPLAY)}}
				/>
				<div id="map" ref="map" style={mapStyle}></div>
			</div>
		)
	}
}

export default Discover;
