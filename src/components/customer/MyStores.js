import React, { Component } from 'react';
import Breadcrumb from '../partials/Breadcrumb';
import RewardDetail from './RewardDetail';
import ReactSVG from 'react-svg';
import '../../css/mystores.css';

const QRDISPLAY = 'QRDISPLAY',
			DISCOVER 	= 'DISCOVER',
			MYSTORES 	= 'MYSTORES',
			REWARD  		= 'REWARD'

class MyStores extends Component {
	constructor(props){
		super(props);
		this.state = {
			display: MYSTORES,
			activeReward: null,
			rewards: [
				{
					rewardId: '12312312312312',
					rewardURL: '',
					reward: 'Free Medium Cup of Coffee',
					earned: 4,
					required: 6,
					storeId: '1',
					storeName: 'NORMA Coffee',
					storeLogo: 'IMG',
					stampIcon: 'coffee'
				},
				{
					rewardId: '24523453434534',
					rewardURL: '',
					reward: 'Free Slice of Pizza',
					earned: 1,
					required: 9,
					storeId: '2',
					storeName: 'Brendan\'s Pizza',
					storeLogo: 'IMG',
					stampIcon: 'pizza'				
				}
			]
		}
	}
	returnHere = () => {
		this.setState({
			display: MYSTORES,
			activeReward: null
		})
	}

	gotoReward = reward => {
		this.setState({
			display: REWARD, 
			activeReward: reward
		})
	}

	renderRewardDetail = () => {
		const rew = this.state.activeReward
		return(
			<div>
				<Breadcrumb
					canReturn={true}
					goBack={this.returnHere}
				/>
				<RewardDetail
					rewardId= {rew.rewardId}
					rewardURL= {rew.rewardURL}
					reward= {rew.reward}
					earned= {rew.earned}
					required= {rew.required}
					storeId= {rew.storeId}
					storeName= {rew.storeName}
					storeLogo= {rew.storeLogo}
					stampIcon= {rew.StampIcon}					
				/>
			</div>
		)
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

	renderMyStores() {
		const storesList = (
			<ul className="my-stores">
				{this.state.rewards.map((listValue, index) => {
					return (
						<li key={index} className="store-card" onClick={() => this.gotoReward(listValue)}>
							<p>{listValue.name}</p>
							<div>{listValue.storeLogo}</div>
							<h2>{listValue.reward}</h2>
							<p>{listValue.storeName}</p>
							<p className="count-circle">{listValue.earned} / {listValue.required}</p>
							<div className="icons-stamps">
								{this.makeIconsStamps([listValue.earned, listValue.required], listValue.stampIcon)}
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

	render() {
		return(
			<div>
			{this.state.display === MYSTORES ? this.renderMyStores() : this.renderRewardDetail()}
			</div>
		)
	}
}

export default MyStores;
