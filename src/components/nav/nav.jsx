import './nav.scss'
import '../../theme.scss'
import { SearchInput } from '../searchInput/searchInput.jsx'
import { AppContext } from '../../contextProvider'
import React from 'react'

export function Nav() {
	const { theme } = React.useContext(AppContext)

	return (
		<div className='nav'>
			<p className={`title ${theme}`}>¡Inspirate y busca los mejores GIFS</p>
			<img src='./images/ilustra_header.svg' alt='ilustracion' height='190px' />
			<SearchInput />
		</div>
	)
}
