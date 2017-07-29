import React, { Component } from 'react';
import stores from '../../db/stores_DB';
import '../../css/store-detail.css';

class StoreDetail extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render() {
		const store = stores[this.props.id]
		return (
			<div id="store-detail">
				<h1>{store.name}</h1>
				<img src={store.img} />
				<p>{store.desc}</p>
				<p>Phone: {store.phone}</p>
			</div>
		)
	}
}

export default StoreDetail;
