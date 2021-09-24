import './results.scss'
import '../../theme.scss'
import { GifCard } from '../gifcard/gifcard.jsx'
import React from 'react'
import { AppContext } from '../../contextProvider'

export function Results() {
	const { arrayGifos, searchWord, activeSearch } = React.useContext(AppContext)

	switch (activeSearch === false) {
		case true:
			return (
				<p className='search-text'>
					{' '}
					Para ver gifs, debe realizar una búsqueda
				</p>
			)
		case false:
			if (arrayGifos !== '') {
				return (
					<div>
						<div className='search-text'>
							Los resultados de {`${searchWord}`}
						</div>
						<div className='results'>
							{arrayGifos.map((gif) => {
								return (
									<GifCard key={gif.id} gifurl={gif.images.fixed_height.url} />
								)
							})}
						</div>
					</div>
				)
			} else {
				return (
					<p className='search-text'>
						Busqueda invalida, ingrese otra palabra.
					</p>
				)
			}
		default:
	}
}
