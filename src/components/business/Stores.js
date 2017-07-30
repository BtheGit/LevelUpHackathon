import React, { Component } from 'react';
import Breadcrumb from '../partials/Breadcrumb';
import IconStamps from '../partials/IconStamps';

const QRSCANNER = 'QRSCANNER'

class Stores extends Component {
	constructor(props){
		super(props);
		this.state = {
			branches: [
				{
					rewardId: '12312312312312',
					storeId: '1',
					storeName: 'NORMA Coffee',
					address: 'Xinhai Road, 22',
					storeLogo: 'norma.jpg',
					stampIcon: 'coffee'
				},
				{
					rewardId: '12312344312312',
					storeId: '2',
					storeName: 'NORMA Coffee',
					address: 'Banqiao, 99',
					storeLogo: 'norma.jpg',
					stampIcon: 'coffee'
				},
				{
					rewardId: '12312312312552',
					storeId: '3',
					storeName: 'NORMA Coffee',
					address: 'Daan Road, 156',
					storeLogo: 'norma.jpg',
					stampIcon: 'coffee'
				}
			]
		}
	}


	renderStores() {
		const storesList = (
			<ul className="branches">
				{this.state.branches.map((listValue, index) => {
					return (
						<li key={index} className="generic-card">
							<img src={'/images/' + listValue.storeLogo} className="thumbnail" />
							<h2>{listValue.address}</h2>
						</li>
					);
				})}
			</ul>
		)

		return (
			<div>
				<Breadcrumb
					canReturn={true}
					goBack={() => {this.props.goto(QRSCANNER)}}
				/>
				<div id="branches-view" className="view">
					<h1>Stores</h1>
					{storesList}
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="full-height-parent">
				{this.renderStores()}
			</div>
		)
	}
}

export default Stores;
