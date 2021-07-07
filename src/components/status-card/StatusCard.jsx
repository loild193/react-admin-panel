import React from 'react'
import './statuscard.css'

const StatusCard = ({ icon, count, title }) => {
	return (
		<div className="status-card">
			<div className="status-card__icon">
				<i className={icon} />
			</div>
			<div className="status-card__info">
				<h4>{ count }</h4>
				<span>{ title }</span>
			</div>
		</div>
	)
}

export default StatusCard
