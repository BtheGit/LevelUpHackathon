import React, { Component } from 'react';
import Breadcrumb from '../partials/Breadcrumb';
import IconStamps from '../partials/IconStamps';

const QRSCANNER = 'QRSCANNER'

class MyStores extends Component {
	constructor(props){
		super(props);
		this.state = {
			customers: [
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


	renderCustomers() {
		const storesList = (
			<ul className="customers">
				{this.state.customers.map((listValue, index) => {
					return (
						<li key={index} className="customer-card">
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
				<div id="customers-view">
					<h1>Customers</h1>
					{storesList}
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="full-height-parent">
				{this.renderCustomers()}
			</div>
		)
	}
}

export default MyStores;
