import React from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom'
import App from "@/components/App"
import Home from "@/components/Home"
import Search from "@/components/Search"
import Shopcart from "@/components/Shopcart"
import Details from "@/components/Details"

import {Provider} from "react-redux"
import store from "../Redux/Store"

const router=(
	<Provider store={store}>
	<Router>
		<App>
			<Switch>
			<Route path="/home" component={Home}/>
			<Route path="/search" component={Search}/>
			<Route path="/shopcart" component={Shopcart}/>
			<Route path="/details/:newid" component={Details}/>
			<Route path="/film" render={()=>(
				<Film>
					<Route path="/film/nowplaying" component={Nowplaying} />
					<Route path="/film/comingsoon" component={Comingsoon} />
					<Redirect from="/film" to="/film/nowplaying" />
				</Film>)
			}/>
			<Redirect from="*" to="/home" />
			</Switch>
		</App>
	</Router>
	</Provider>
)


export default router;






