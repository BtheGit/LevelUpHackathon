import React, { Component } from 'react';
import Breadcrumb from '../partials/Breadcrumb';
import IconStamps from '../partials/IconStamps';
import RewardDetail from './RewardDetail';
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

	renderMyStores() {
		const storesList = (
			<ul className="my-stores">
				{this.state.rewards.map((listValue, index) => {
					return (
						<li key={index} className="store-card" onClick={() => this.gotoReward(listValue)}>
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
		return (
			<div className="full-height-parent">
			{this.state.display === MYSTORES ? this.renderMyStores() : this.renderRewardDetail()}
			</div>
		)
	}
}

export default MyStores;
