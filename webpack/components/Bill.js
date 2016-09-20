import React, { Component } from 'react';

class Bill extends Component {
	constructor(props) {
		super(props);
		this.editBill = this.editBill.bind(this);
		this.deleteBill = this.deleteBill.bind(this);
		this.state = { bill: {} };
	}

	componentWillMount() {
		$.ajax({
			url: `/api/bills/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON',
		}).done( bill => {
			this.setState({ bill });
		}).fail( data => {
			console.log(data);
		});
	}

	editBill() {
		this.props.history.push(`/bills/${this.state.bill.id}/edit`)
	}

	deleteBill() {
		$.ajax({
			url: `/api/bills/${this.props.params.id}`,
			type: 'DELETE',
			dataType: 'JSON'
		}).done( () => {
			this.props.history.push('/');
		})
	}

	render() {
		let { name, amount, category, due_date, due_range } = this.state.bill;
		return(
			<div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{ name }</span>
              <p>Amount: { amount }</p>
              <p>Due Date: { due_date }</p>
              <p>Category: { category }</p>
            </div>
            <div className="card-action">
            	<button className='btn' onClick={this.editBill} >Edit</button>
            	<button className='btn red' onClick={this.deleteBill}>Delete</button>
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default Bill;

