import React from 'react'
import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card'

const Dashboard = () => {
	return (
		<div>
			<h2 className="page-header">Dashboard</h2>
			<div className="row">
				<div className="col-6">
					<div className="row">
						{
							statusCards.map(({ icon, count, title }, index) => (
								<div className="col-6" key={index}>
									<StatusCard 
										icon={icon}
										count={count}
										title={title}
									/>
								</div>
							))
						}
					</div>
				</div>
				<div className="col-6">
					<div className="card full-height">
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
