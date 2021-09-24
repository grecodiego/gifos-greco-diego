import React, { useState } from 'react'

export const AppContext = React.createContext()

export default function AppProvider({ children }) {
	const [theme, setTheme] = useState('light')
	const [searchWord, setSearchWord] = useState('')
	const [searchWordTemporal, setSearchWordTemporal] = useState('')
	const [arrayGifos, setArrayGifos] = useState([])
	const [arrayAutoComplete, setArayAutoComplete] = useState('')
	const [loading, setLoading] = useState(false)
	const [invalidSearch, setInvalidSearch] = useState(false)
	const [activeSearch, setActiveSearch] = useState(false)
	const handleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	function handleSetSearchWord(data) {
		if (data.length < 1) {
			setInvalidSearch(true)
		} else {
			setInvalidSearch(false)
			setArrayGifos(data)
			setArayAutoComplete('')
		}
	}

	async function apiGifos() {
		try {
		  const response = await fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=nNDPWcy8Svqp6UHL4JHTsPmsFnIrpXMT&q=${searchWord}&limit=12&offset=0&rating=g&lang=en`
		  );
		  const arrayGifos = await response.json();
		  handleSetSearchWord(arrayGifos.data);
		} catch (error) {
		  console.error("Error:", error);
		}
	  }
	
	  async function apiTentativeWords() {
		try {
		  const response = await fetch(
			`https://api.giphy.com/v1/gifs/search/tags?api_key=nNDPWcy8Svqp6UHL4JHTsPmsFnIrpXMT&q=${searchWordTemporal}&limit=4&offset=0`
		  );
		  const tentativeWords = await response.json();
		  setArayAutoComplete(tentativeWords.data);
		} catch (error) {
		  console.error("Error:", error);
		}
	  }
	return (
		<AppContext.Provider
			value={{
				apiGifos,
				apiTentativeWords,
				theme,
				setTheme,
				searchWord,
				setSearchWord,
				searchWordTemporal,
				setSearchWordTemporal,
				arrayGifos,
				setArrayGifos,
				arrayAutoComplete,
				setArayAutoComplete,
				handleTheme,
				loading,
				setLoading,
				invalidSearch,
				setInvalidSearch,
				activeSearch,
				setActiveSearch,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
