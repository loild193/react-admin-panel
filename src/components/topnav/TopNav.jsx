import React from 'react'
import userImage from '../../assets/images/HD.jpg'
import notifications from '../../assets/JsonData/notification.json'
import userMenus from '../../assets/JsonData/user_menus.json'
import { renderFooter, renderItem, renderUserToggle } from '../../utils/dropdown'
import DropDown from '../dropdown/DropDown'
import './topnav.css'

const currentUser = {
	displayName: 'Uchiha Obito',
	image: userImage,
};

const TopNav = () => {
	return (
		<div className="topnav">
			<div className="topnav__search">
				<input type="text" placeholder="Search here..." />
				<i className="bx bx-search" />
			</div>
			<div className="topnav__right">
				<div className="topnav__right-item">
					<DropDown 
						customToggle={() => renderUserToggle(currentUser)}
						contentData={userMenus}
						renderItems={(item, index) => renderItem(item, index)}
					/>
				</div>
				<div className="topnav__right-item">
					<DropDown 
						icon='bx bx-bell'
						badge='19'
						contentData={notifications}
						renderItems={(item, index) => renderItem(item, index)}
						renderFooter={renderFooter}
					/>
				</div>
				<div className="topnav__right-item">
					<DropDown />
				</div>
			</div>
		</div>
	)
}

export default TopNav
