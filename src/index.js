import React    from 'react'
import ReactDOM from 'react-dom'

import Home     from './pages/Home'

import './styles/generic.css'

import { Provider } from "react-redux"
import store        from "./store"

import registerServiceWorker from './registerServiceWorker'

store.firebaseAuthIsReady.then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<Home />
		</Provider>,
		document.getElementById("root")
	)
	registerServiceWorker()
})