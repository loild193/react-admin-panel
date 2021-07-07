import React from 'react'
import './badge.css'

const Badge = ({ type, content}) => {
	return (
		<span className={`badge badge-${type}`}>
			{ content }
		</span>
	)
}

export default Badge
