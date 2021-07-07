import PropTypes from 'prop-types';
import React from 'react';

function SidebarItem ({ active, icon, title }) {
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

SidebarItem.propTypes = {
	active: PropTypes.bool,
	icon: PropTypes.string,
	title: PropTypes.string,
}

SidebarItem.defaultProps = {
	active: false,
	icon: '',
	title: '',
}

export default SidebarItem
