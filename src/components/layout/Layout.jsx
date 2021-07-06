import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from '../Routes'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import './layout.css'

const Layout = () => {
	return (
		<Router>
			<Route render={ props => 
				<div className='layout'>
					<Sidebar {...props} />
					<div className="layout__content">
						<TopNav />
						<div className="layout__content-main">
							<Routes />
						</div>
					</div>
				</div>
			} />
		</Router>
	)
}

export default Layout
