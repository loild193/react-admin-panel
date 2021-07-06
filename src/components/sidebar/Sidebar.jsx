import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import sidebarItems from '../../assets/JsonData/sidebar_routes.json'
import SidebarItem from '../common/SidebarItem'
import './sidebar.css'

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
