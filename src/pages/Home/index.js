import React, { Component, Fragment }             from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from '../../components/layout/Navbar'
import Dashboard from "../../components/dashboard/Dashboard";


class Home extends Component {
	render() {
		return (
			<BrowserRouter>
				<Fragment>
					<Navbar />
					<Switch>
						<Route path='/' component={Dashboard} />
					</Switch>
				</Fragment>
			</BrowserRouter>
		)
	}
}

export default Home