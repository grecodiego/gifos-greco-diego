import './header.scss'
import '../../theme.scss'
import { ButtonLightDark } from '../buttonlightdark/buttonlightdark.jsx'
import React from 'react'
import { AppContext } from '../../contextProvider'
export function Header() {
	const { theme } = React.useContext(AppContext)
	return (
		<div className={`header ${theme}`}>
			{theme === 'light' ? (
				<img src='./images/logo-desktop.svg' alt='logo' height='69px' />
			) : (
				<img
					src='./images/logo-mobile-modo-noct.svg'
					alt='logo'
					height='69px'
				/>
			)}
			<ButtonLightDark />
		</div>
	)
}
