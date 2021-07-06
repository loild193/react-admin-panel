import React, { useRef } from 'react';
import { clickOutsideRef } from '../../utils/dropdown';
import './dropdown.css';

const DropDown = props => {
	const { icon, badge, customToggle, contentData, renderItems, renderFooter } = props;
	const dropdownButtonRef = useRef(null);
	const dropdownContentRef = useRef(null);

	clickOutsideRef(dropdownContentRef, dropdownButtonRef);

	return (
		<div className="dropdown">
			<button ref={dropdownButtonRef} className="dropdown__toggle">
				{
					icon && <i className={icon} />
				}
				{
					badge && <span className="dropdown__toggle-badge">{ badge }</span>
				}
				{
					customToggle && customToggle()
				}
			</button>
			<div ref={dropdownContentRef} className="dropdown__content">
				{
					contentData && renderItems 
						&& contentData.map((item, index) => renderItems(item, index))
				}
				{
					renderFooter && <div className="dropdown__footer">{renderFooter()}</div>
				}
			</div>
		</div>
	)
}

export default DropDown
