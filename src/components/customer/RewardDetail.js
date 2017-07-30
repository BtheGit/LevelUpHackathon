import React, { Component } from 'react';
import StoreDetail from './StoreDetail';
import Breadcrumb from '../partials/Breadcrumb';
import IconStamps from '../partials/IconStamps';
import '../../css/reward-detail.css';
import MyStores from './MyStores'
import ReactSVG from 'react-svg';
import '../../css/rewarddetail.css'

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
			<div id="reward-detail" className="full-height-parent">
				{this.props.rewardImage ? (
						<img src={'/images/' + this.props.rewardImage} className="profile" />
					) : (
						<img src={'/images/' + this.props.storeLogo} className="profile" />
					)
				}
				<h1>{this.props.reward}</h1>
				<p>{this.props.storeName}</p>
				<div id="stamps-wrapper">
					<p>{this.props.earned} / {this.props.required}</p>
					<IconStamps stamps={[this.props.earned, this.props.required]} stampsIcon={this.props.stampIcon} />
				</div>
				<div onClick={() => this.setState({display: STORE})} className="pure-button pure-button-primary">Exchange</div>
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
