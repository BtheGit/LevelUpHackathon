import React, { Component } from 'react';
import Breadcrumb from '../partials/Breadcrumb';
import '../../css/mystores.css';

const QRDISPLAY = 'QRDISPLAY',
			DISCOVER 	= 'DISCOVER',
			MYSTORES 	= 'MYSTORES'

class MyStores extends Component {
	constructor(props){
		super(props);
		this.state = {
			myStores: [
				{
					name: 'CoCo - Tea shop',
					stamps: [4, 6],
					stampIcon: 'tea'
				},
				{
					name: 'Brendan\'s Pizza',
					stamps: [1, 9],
					stampIcon: 'food'
				}
			]
		}
	}

	render() {
		const storesList = (
			<ul className="my-stores">
				{this.state.myStores.map((listValue, index) => {
					return (
						<li key={index} className="store-card">
							<p>{listValue.name}</p>
							<p>{listValue.stamps[0]} / {listValue.stamps[1]}</p>
						</li>
					);
				})}
			</ul>
		)
		return (
			<div>
				<Breadcrumb
					canReturn={true}
					goBack={() => {this.props.goto(QRDISPLAY)}}
				/>
				<div id="mystores-view">
					<h1>My Stores</h1>
					{storesList}
				</div>
			</div>
		)
	}
}

export default MyStores;
