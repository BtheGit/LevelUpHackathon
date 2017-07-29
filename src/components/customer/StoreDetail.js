import React, { Component } from 'react';
import stores from '../../db/stores_DB';

class StoreDetail extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render() {
		const store = stores[this.props.id]
		return (
			<div>
				<div>{store.name}</div>
				<img src={store.img} />
				<div>{store.desc}</div>
				<div>Phone: {store.phone}</div>
			</div>
		)
	}
}

export default StoreDetail;