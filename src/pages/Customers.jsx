import React from 'react'
import customerList from '../assets/JsonData/customers-list.json'
import Card from '../components/common/Card';

const customerData = {
	head: [
		'',
		'name',
		'email',
		'location',
		'phone',
		'total spend',
		'total orders',
	],
	body: customerList,
};

const Customers = () => {
	return (
		<div>
			<h2 className="page-header">customers</h2>
			<div className="row">
				<div className="col-12">
					<Card 
						tableData={customerData}
						limit={10}
					/>
				</div>
			</div>
		</div>
	)
}

export default Customers
