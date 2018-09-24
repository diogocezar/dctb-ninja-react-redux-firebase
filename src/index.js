import React    from 'react'
import ReactDOM from 'react-dom'

import Home     from './pages/Home'

import './styles/generic.css'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Home />, document.getElementById('root'))
registerServiceWorker()