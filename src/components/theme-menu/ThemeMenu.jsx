import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setColor, setMode } from '../../actions/ThemeAction'
import { clickOutsideRef } from '../../utils/dropdown'
import './thememenu.css'

const mode_settings = [
	{
		id: 'light',
		name: 'Light',
		background: 'light-background',
		class: 'theme-mode-light'
	},
	{
		id: 'dark',
		name: 'Dark',
		background: 'dark-background',
		class: 'theme-mode-dark'
	}
]

const color_settings = [
	{
		id: 'blue',
		name: 'Blue',
		background: 'blue-color',
		class: 'theme-color-blue'
	},
	{
		id: 'red',
		name: 'Red',
		background: 'red-color',
		class: 'theme-color-red'
	},
	{
		id: 'cyan',
		name: 'Cyan',
		background: 'cyan-color',
		class: 'theme-color-cyan'
	},
	{
		id: 'green',
		name: 'Green',
		background: 'green-color',
		class: 'theme-color-green'
	},
	{
		id: 'orange',
		name: 'Orange',
		background: 'orange-color',
		class: 'theme-color-orange'
	},
]

const setActiveMenu = ref => ref.current.classList.add('active');
const removeActiveMenu = ref => ref.current.classList.remove('active');

const ThemeMenu = () => {
	const [currentMode, setCurrentMode] = useState('light');
	const [currentColor, setCurrentColor] = useState('blue');
	const menuRef = useRef(null);
	const menuToggleRef = useRef(null);

	const dispatch = useDispatch();

	clickOutsideRef(menuRef, menuToggleRef);

	const setNewMode = mode => {
		setCurrentMode(mode.id);
		localStorage.setItem('themeMode', mode.class);
		dispatch(setMode(mode.class));
	}
	const setNewColor = color => {
		setCurrentColor(color.id);
		localStorage.setItem('colorMode', color.class);
		dispatch(setColor(color.class));
	}

	useEffect(() => {
		const theme = localStorage.getItem('themeMode', 'theme-mode-light');
		const color = localStorage.getItem('colorMode', 'theme-mode-light');

		const themeClass = mode_settings.find(setting => setting.class === theme);
		const colorClass = mode_settings.find(setting => setting.class === color);

		themeClass !== undefined && setCurrentMode(themeClass.id);
		colorClass !== undefined && setCurrentMode(colorClass.id);
	}, []);

	return (
		<>
			<button ref={menuToggleRef} className="dropdown__toggle" onClick={() => setActiveMenu(menuRef)}>
				<i className="bx bx-palette" />
			</button>
			<div ref={menuRef} className="theme-menu">
				<h4>Theme settings</h4>
				<div className="theme-menu__close" onClick={() => removeActiveMenu(menuRef)}>
					<i className="bx bx-x" />
				</div>
				<div className="theme-menu__select">
					<span>Choose mode</span>
					<ul className="mode-list">
						{
							mode_settings.map((mode, index) => (
								<li key={index} onClick={() => setNewMode(mode)}>
									<div className={`mode-list__color ${mode.background} ${mode.id === currentMode && 'active'}`}>
										<i className="bx bx-check" />
									</div>
									<span>{ mode.name }</span>
								</li>
							))
						}
					</ul>
				</div>
				<div className="theme-menu__select">
					<span>Choose color</span>
					<ul className="mode-list">
						{
							color_settings.map((color, index) => (
								<li key={index} onClick={() => setNewColor(color)}>
									<div className={`mode-list__color ${color.background} ${color.id === currentColor && 'active'}`}>
										<i className="bx bx-check" />
									</div>
									<span>{ color.name }</span>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		</>
	)
}

export default ThemeMenu
