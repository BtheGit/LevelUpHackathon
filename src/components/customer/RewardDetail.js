import React, { Component } from 'react';
import StoreDetail from './StoreDetail';
import Breadcrumb from '../partials/Breadcrumb';

const REWARD = 'REWARD',
			STORE  = 'STORE'

class RewardDetail extends Component {
	constructor(props){
		super(props);
		this.state = {
			display: REWARD,
		}
	}

	renderReward = () => {
		return (
			<div>
				<div>RewardDetail</div>
				<div>IMAGE: {this.props.rewardURL}</div>
				<div>Type: {this.props.reward}</div>
				<div>Earned: {this.props.earned}</div>
				<div>Required: {this.props.required}</div>
				<div>Store: {this.props.storeName}</div>
				<div>Store Logo: {this.props.storeLogo}</div>
				<div>Stamp Icon: {this.props.stampIcon}</div>
				<div onClick={() => this.setState({display: STORE})}>LINKTOSTORE</div>
			</div>
		)
	}

	renderStore = () => {
		return (
			<div>
				<StoreDetail
					id={this.props.storeId}
				/>
			</div>
		)
	}

	render() {
		return(
			<div>
				{this.state.display === REWARD ? this.renderReward() : this.renderStore()}
			</div>
		)
	}
}

export default RewardDetail;