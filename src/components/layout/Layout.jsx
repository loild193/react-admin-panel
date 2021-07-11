import {useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { setColor, setMode } from '../../actions/ThemeAction'
import Routes from '../Routes'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import './layout.css'
import {scrollToTopDocument} from "../../utils/scroll";

const Layout = () => {
	const themeReducer = useSelector(state => state.ThemeReducer);
	const shiftedLeft = useSelector(state => state.SidebarReducer.shiftedLeft);
	const upButtonRef = useRef(null);

	const dispatch = useDispatch();

	useEffect(() => {
		const theme = localStorage.getItem('themeMode');
		const color = localStorage.getItem('colorMode');

		dispatch(setMode(theme));
		dispatch(setColor(color));
	}, [dispatch]);

	scrollToTopDocument(upButtonRef);

	const handleGoToTop = rootRef => {
		// Scroll to top logic
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}
	
	return (
		<Router>
			<Route render={ props => 
				<div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
					<Sidebar {...props} />
					<div className={`layout__content ${shiftedLeft && 'left'}`}>
						<TopNav />
						<div className="layout__content-main">
							<Routes />
							<div
								ref={upButtonRef}
								className="layout__content-up"
								onClick={handleGoToTop}
							>
								<i className="bx bxs-chevron-up" />
							</div>
							<div className="layout__content-footer">
								Let's go bro.. Fight for the future
							</div>
						</div>
					</div>
				</div>
			} />
		</Router>
	)
}

export default Layout
