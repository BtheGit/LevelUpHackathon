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
					rewardURL: '',
					reward: 'Free Medium Cup of Coffee',
					earned: 4,
					required: 6,
					storeId: '1',
					storeName: 'NORMA Coffee',
					storeLogo: 'norma.jpg',
					stampIcon: 'coffee'
				},
				{
					rewardId: '24523453434534',
					rewardURL: '',
					reward: 'Free Slice of Pizza',
					earned: 1,
					required: 9,
					storeId: '2',
					storeName: 'PizzaHut',
					storeLogo: 'pizzahut.jpg',
					stampIcon: 'pizza'
				}
			]
		}
	}


	renderStores() {
		const storesList = (
			<ul className="branches">
				{this.state.branches.map((listValue, index) => {
					return (
						<li key={index} className="branch-card">
							<img src={'/images/' + listValue.storeLogo} className="thumbnail" />
							<h2>{listValue.reward}</h2>
							<p className="small">{listValue.storeName}</p>
							<p className="count-circle">{listValue.earned} / {listValue.required}</p>
							<div className="icons-stamps">
								<IconStamps stamps={[listValue.earned, listValue.required]} stampsIcon={listValue.stampIcon} />
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
					goBack={() => {this.props.goto(QRSCANNER)}}
				/>
				<div id="branches-view">
					<h1>STORES</h1>
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
