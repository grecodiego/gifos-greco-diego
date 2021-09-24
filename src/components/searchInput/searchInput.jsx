import './searchInput.scss'
import '../../theme.scss'
import { AppContext } from '../../contextProvider'
import React from 'react'
import useKeypress from '../../hooks/usekeypress.jsx'

export function SearchInput() {
	const {
		theme,
		setSearchWord,
		searchWordTemporal,
		setSearchWordTemporal,
		arrayAutoComplete,
		setLoading,
		setActiveSearch,
	} = React.useContext(AppContext)

	useKeypress('ENTER', () => setSearchWord(searchWordTemporal))

	return (
		<div>
			<form
				className='container-search'
				autoComplete='off'
				action='/action_page.php'
			>
				<div>
					<input
						className={
							arrayAutoComplete.length > 0 ? 'box-search-active' : 'box-search'
						}
						name='searchInput'
						id='idSearchInput'
						type='search'
						autoComplete='off'
						placeholder='Busca gifs'
						value={searchWordTemporal}
						onChange={(e) => setSearchWordTemporal(e.target.value)}
					/>
				</div>
				<button
					className={
						arrayAutoComplete.length > 0 ? 'box-button-active' : 'box-button'
					}
					id='idButtonSearch'
					onClick={(e) => {
						e.preventDefault()
						setSearchWord(searchWordTemporal)
						setLoading(true)
						setActiveSearch(true)
					}}
				>
					{theme === 'light' ? (
						<img
							className='icon-search'
							src='./images/icon-search.svg
        '
							alt='logo-lupa'
						/>
					) : (
						<img
							className='icon-search'
							src='./images/icon-search-mod-noc.svg
	'
							alt='logo-lupa'
						/>
					)}
				</button>
				{arrayAutoComplete.length > 0 ? (
					<ul className='autocomplete-list'>
						{arrayAutoComplete.map((alt) => {
							return (
								<li
									className='autocomplete-item'
									key={alt.name}
									onClick={(e) => {
										setSearchWord(alt.name)
										setLoading(true)
										setActiveSearch(true)
									}}
								>
									{alt.name}
								</li>
							)
						})}
					</ul>
				) : null}
			</form>
		</div>
	)
}
