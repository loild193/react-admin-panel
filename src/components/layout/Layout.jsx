import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { setColor, setMode } from '../../actions/ThemeAction'
import Routes from '../Routes'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import './layout.css'

const Layout = () => {
	const themeReducer = useSelector(state => state.ThemeReducer);
	const shiftedLeft = useSelector(state => state.SidebarReducer.shiftedLeft);

	const dispatch = useDispatch();

	useEffect(() => {
		const theme = localStorage.getItem('themeMode');
		const color = localStorage.getItem('colorMode');

		dispatch(setMode(theme));
		dispatch(setColor(color));
	}, [dispatch]);
	
	return (
		<Router>
			<Route render={ props => 
				<div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
					<Sidebar {...props} />
					<div className={`layout__content ${shiftedLeft && 'left'}`}>
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
