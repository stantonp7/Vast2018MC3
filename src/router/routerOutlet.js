import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/home/home";
import InteractionGraph from "../components/interactionGraphs/interactionGraph";
// Order routes from most specific to most generic
export function RouterOutlet() {
	return (
		<div>
			<Switch>
				{/* sample route */}
				<Route path='/interaction-graph' component={InteractionGraph} />
				<Route path='/home' component={Home} />
				<Route path='/animated-heatmap' component={() => { 
					window.location.href = 'https://20d-test-network-diagram-dev-win.azurewebsites.net/animated_heatmap.html'; 
					return null;
				}}/>
				<Route exact path="/" render={() => (
					<Redirect to="/home"/>
				)}/>
			</Switch>
		</div>
	);
}
