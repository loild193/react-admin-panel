import React from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import statusCards from '../assets/JsonData/status-card-data.json'
import Card from '../components/common/Card'
import StatusCard from '../components/status-card'
import { latestOrders, topCustomers } from '../utils/table'

const chartOptions = {
	series: [
		{
			name: 'Online Customers',
			data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
		}, 
		{
			name: 'Store Customers',
			data: [40, 30, 70, 80, 40, 16, 40, 20, 51]
		},
	],
	options: {
		color: ['#6ab04c', '#2980b9'],
		chart: {
			background: 'transparent',
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
		},
		legend: {
			position: 'top',
		},
		grid: {
			show: false,
		}
	}
}

const Dashboard = () => {
	const themeReducer = useSelector(state => state.ThemeReducer.mode);
	const shiftedLeft = useSelector(state => state.SidebarReducer.shiftedLeft);
	
	return (
		<>
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
						<Chart 
							options={themeReducer === 'theme-mode-dark' ? {
								...chartOptions.options,
								theme: { mode: 'dark' },
							} : {
								...chartOptions.options,
								theme: { mode: 'light' },
							}}
							series={chartOptions.series}
							type="line"
							height="100%"
							width={`${shiftedLeft ? '1154px': '1094px'}`}
						/>
					</div>
				</div>
				<div className="col-4">
					<Card 
						headerTitle="top customers"
						tableData={topCustomers}
					/>
				</div>
				<div className="col-8">
					<Card 
						headerTitle="last orders"
						tableData={latestOrders}
					/>
				</div>
			</div>
		</>
	)
}

export default Dashboard
