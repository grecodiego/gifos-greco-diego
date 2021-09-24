import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import './theme.scss'
import App from './App'
import AppProvider from './contextProvider'

ReactDOM.render(
	<AppProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>{' '}
	</AppProvider>,

	document.getElementById('root')
)
