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
					rewardURL: 'https://pic.pimg.tw/sistravel2/1459343488-3371783602_n.jpg?v=1459343631',
					reward: 'Free Medium Cup of Coffee',
					earned: 4,
					required: 6,
					storeId: '1',
					storeName: 'NORMA Coffee',
					storeLogo: 'norma.jpg',
					rewardPic: 'norma.jpg',
					stampIcon: 'coffee'
				},
				{
					rewardId: '24523453434534',
					rewardURL: 'https://pbs.twimg.com/profile_images/875379306343550976/thFcdklE.jpg',
					reward: 'Free Slice of Pizza',
					earned: 1,
					required: 9,
					storeId: '2',
					storeName: 'PizzaHut',
					storeLogo: 'pizzahut.jpg',
					rewardPic: 'pizzahut.jpg',
					stampIcon: 'pizza'
				},
				{
					rewardId: '88888888888888',
					rewardURL: 'http://twcoupon.com/images/logo/p_COCO.png',
					reward: 'Free Medium Cup of Tea',
					earned: 3,
					required: 8,
					storeId: '3',
					storeName: 'Coco',
					storeLogo: 'p_COCO.png ',
					stampIcon: 'tea'
				},
				{
					rewardId: '77777777777777',
					rewardURL: 'http://twcoupon.com/images/logo/p_COCO.png',
					reward: 'Free Medium Cup of Coffee',
					earned: 6,
					required: 7,
					storeId: '4',
					storeName: 'Starbuck',
					storeLogo: 'starbucks.jpg',
					stampIcon: 'coffee'
				},
				{
					rewardId: '99999999999999',
					rewardURL: 'https://upload.wikimedia.org/wikipedia/zh/thumb/1/18/KFC.svg/1024px-KFC.svg.png',
					reward: 'Free Chicken Hamburger',
					earned: 2,
					required: 5,
					storeId: '5',
					storeName: 'KFC',
					storeLogo: 'KFC.svg.png',
					stampIcon: 'hamburger'
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
					stampIcon= {rew.stampIcon}
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
