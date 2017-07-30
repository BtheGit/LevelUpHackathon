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
		return (
			<div>
				<Breadcrumb
					canReturn={true}
					goBack={() => {this.props.goto(QRSCANNER)}}
				/>
				<div id="customers-view" className="view">
					<h1>Customers</h1>
					<table className="pure-table">
						<thead>
							<tr>
								<td>Customer</td>
								<td>Loyalty Index</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Eddie A.</td>
								<td>15</td>
							</tr>
							<tr>
								<td>Brendan B.</td>
								<td>5</td>
							</tr>
							<tr>
								<td>Howard C.</td>
								<td>4</td>
							</tr>
						</tbody>
					</table>
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
