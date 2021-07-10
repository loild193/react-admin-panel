import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setShiftedLeft } from '../../actions/SidebarAction'
import logo from '../../assets/images/logo.png'
import sidebarItems from '../../assets/JsonData/sidebar_routes.json'
import SidebarItem from '../common/SidebarItem'
import './sidebar.css'

const Sidebar = ({ location: { pathname } }) => {
	const shiftedLeft = useSelector(state => state.SidebarReducer.shiftedLeft);
	const dispatch = useDispatch();
	const activeItem = sidebarItems.findIndex(item => item.route === pathname);
	const setShift = () => dispatch(setShiftedLeft(!shiftedLeft));

	return (
		<div className={`sidebar ${shiftedLeft ? 'left' : ''}`}>
			<div className="sidebar__logo">
				<img src={logo} alt="company logo" />
			</div>
			<div className="sidebar__shift" onClick={setShift}>
				{
					!shiftedLeft ?
						<>
							<i className='bx bx-chevrons-left'/>
							<span>Shift</span>
						</> :
						<i className='bx bx-chevrons-right' />
				}
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
