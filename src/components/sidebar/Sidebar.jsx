import React from 'react'

import './sidebar.css'

import logo from '../../assets/images/logo.png'

import sidebarItems from '../../assets/JsonData/sidebar_routes.json'
import { Link } from 'react-router-dom'

const SidebarItem = ({active, icon, title}) => {
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

const Sidebar = ({ location: { pathname } }) => {
	const activeItem = sidebarItems.findIndex(item => item.route === pathname);

	return (
		<div className="sidebar">
			<div className="sidebar__logo">
				<img src={logo} alt="company logo" />
			</div>
			{
				sidebarItems.map(({route, icon, display_name}, index) =>
					<Link to={route} key={index}>
						<SidebarItem 
							icon={icon}
							title={display_name}
							active={index === activeItem}
						/>
					</Link>
				)
			}
		</div>
	)
}

export default Sidebar
