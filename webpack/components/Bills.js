import React, { Component } from 'react';
import { Link } from 'react-router';

class Bills extends Component {
	constructor(props) {
		super(props);
		this.state = { bills: [] };
	}
	componentWillMount() {
		$.ajax({
			url: '/api/bills',
			type: 'GET',
			dataType: 'JSON'
		}).done( bills => {
			this.setState({ bills });
		});
	}

	displayBills() {
		let bills = this.state.bills.map( bill => {
			return(
				<li key={bill.id}> 
					<Link to={`/bills/${bill.id}`}> { bill.name } </Link>
				</li>
			)
		});
		return bills;
	}

	render() {
		return (
			<div>
				<h1>All Bills</h1>
				<ul>
					{ this.displayBills() }
				</ul>
			</div>
		)
	}

}

export default Bills;