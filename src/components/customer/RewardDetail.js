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



	renderReward = () => {
		return (
			<div id="reward-detail" className="full-height-parent">
				<img src={'/images/' + this.props.storeLogo} className="profile" />
				<h1>{this.props.reward}</h1>
				<p>{this.props.storeName}</p>
				<div id="stamps-wrapper">
					<p>{this.props.earned} / {this.props.required}</p>
					<IconStamps stamps={[this.props.earned, this.props.required]} stampsIcon={this.props.stampIcon} />
				</div>
				<div onClick={() => this.setState({display: STORE})} className="pure-button pure-button-primary">Store</div>
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
