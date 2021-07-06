import React from 'react'

const SidebarItem = ({ active, icon, title }) => {
	const activeStatus = active ? 'sidebar__item-inner--active' : '';

	return (
		<div className="sidebar__item">
			<div className={`sidebar__item-inner ${activeStatus}`}>
				<i className={icon} />
				<span>{ title }</span>
			</div>
		</div>
	)
}

export default SidebarItem
