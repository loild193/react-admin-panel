import { Link } from "react-router-dom"

// render user avatar and name
export const renderUserToggle = ({ displayName, image }) => (
	<div className="topnav__right-user">
		<div className="topnav__right-user__image">
			<img src={image} alt="user avatar" />
		</div>
		<div className="topnav__right-user__name">{ displayName }</div>
	</div>
)

// render dropdown item
export const renderItem = ({ icon, content }, index) => (
	<Link to='/' key={index}>
		<div className="notification-item">
			<i className={ icon } />
			<span>{ content }</span>
		</div>
	</Link>
)

// render a footer
export const renderFooter = () => <Link to='/'>See all</Link>

// click outside function to close dropdown
export const clickOutsideRef = (contentRef, toggleRef) => {
	document.addEventListener('mousedown', e => {
		// user click toggle
		if (toggleRef.current && toggleRef.current.contains((e.target))) {
			contentRef.current.classList.toggle('active');
		}
		else {
			// user click outside toggle and content
			if (contentRef.current && !contentRef.current.contains(e.target)) {
				contentRef.current.classList.remove('active');
			}
		}
	});
}