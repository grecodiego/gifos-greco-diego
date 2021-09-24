import './buttonlightdark.scss'
import '../../theme.scss'
import React from 'react'
import { AppContext } from '../../contextProvider'

export function ButtonLightDark() {
	const { theme, handleTheme } = React.useContext(AppContext)

	return (
		<button
			className={`button-lightDark ${theme}`}
			value={theme}
			onClick={handleTheme}
		>
			MODO {theme === 'light' ? 'DARK' : 'LIGHT'}
		</button>
	)
}
