import React, { Component } from 'react';
import Breadcrumb from '../partials/Breadcrumb';
import ReactSVG from 'react-svg';
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

	makeIconsStamps = (stamps, stampsIcon) => {
		const stampsCurrent = stamps[0];
		const stampsMax = stamps[1];
		let icon = null;

		switch (stampsIcon) {
			case 'coffee':
				icon = (<ReactSVG path="/images/stamp_coffee.svg"/>);
				break;
			case 'tea':
				icon = (<ReactSVG path="/images/stamp_tea.svg"/>);
				break;
			default :
				icon = '#';
		}

		return Array(stampsMax).fill().map((stamp, index) => {
			if (index >= stampsCurrent) {
				return (
					<span key={index} className="stamp-icon empty">
						{icon}
					</span>
				);
			} else {
				return (
					<span key={index} className="stamp-icon">
						{icon}
					</span>
				);
			}
		});
	}

	render() {
		const storesList = (
			<ul className="my-stores">
				{this.state.myStores.map((listValue, index) => {
					return (
						<li key={index} className="store-card">
							<p>{listValue.name}</p>
							<p className="count-circle">{listValue.stamps[0]} / {listValue.stamps[1]}</p>
							<div className="icons-stamps">
								{this.makeIconsStamps(listValue.stamps, listValue.stampIcon)}
							</div>
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
					<h1>My Rewards</h1>
					{storesList}
				</div>
			</div>
		)
	}
}

export default MyStores;
