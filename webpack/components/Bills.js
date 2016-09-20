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
		}).fail( data => {
			console.log(data);
		});
	}

	displayBillName() {
		let bills = this.state.bills.map( bill => {
			return(
				<div key={bill.id}>
					<table>
						<tbody>
							<tr>
								<th className='col s1'>{ bill.id }</th>
								<th className='col s4'><Link key={bill.id} to={`/bills/${bill.id}`}> { bill.name } </Link></th>
								<th className='col s3'>{ bill.amount }</th>
								<th className='col s3'>{ bill.due_date }</th>
							</tr>
						</tbody>
					</table>
				</div>
				
			)
		});
		return bills;
	}

	addBill() {
		$.ajax({
			url: '/api/bills',
			type: 'POST',
			dataType: 'JSON',
			data: {}
		}).done( bill => {
			console.log(bill);
		})
	}

	render() {
		if(this.state.bills) {
			return (
				<div className='container'>
					<div className='row'>
						<h1>All Bills</h1>
							<div>
								<table>
									<thead>
										<tr>
											<th className='col s1'>Id</th>
											<th className='col s4'>Bill Name</th>
											<th className='col s3'>Amount</th>
											<th className='col s3'>Due Date</th>
										</tr>
									</thead>
								</table>
								{ this.displayBillName() }
							</div>
					</div>
				</div>
			)
		} else {
			<div>
				Loading...
			</div>
		}
	}

}

export default Bills;