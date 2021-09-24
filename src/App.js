import React, { useEffect } from 'react'
import './App.scss'
import './theme.scss'
import { Header } from './components/header/header.jsx'
import { Nav } from './components/nav/nav.jsx'
import { Results } from './components/results/results.jsx'
import { AppContext } from './contextProvider'

function App() {
	const {
		apiGifos,
		apiTentativeWords,
		theme,
		searchWord,
		searchWordTemporal,
		setLoading,
		loading,
setArrayGifos,
	} = React.useContext(AppContext)

	useEffect(() => {
		apiTentativeWords()
	}, [searchWordTemporal])

	useEffect(() => {
		setTimeout(() => {
		  setArrayGifos("");
		  apiGifos();
		}, 0);
		setTimeout(() => {
		  setLoading(false);
		}, 2000);
	  }, [searchWord]);

	return (
		<div className={`background ${theme}`}>
			<div className={`cointainer ${theme}`}>
				<Header />
				<Nav />
				{loading === true ? (
					<div className='search-loading'>Loading..</div>
				) : (
					<Results />
				)}
			</div>
		</div>
	)
}

export default App
