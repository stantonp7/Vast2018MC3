import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/home/home";
import InteractionGraph from "../components/interactionGraphs/interactionGraph";
import Sketches from "../components/sketches/sketches";
// Order routes from most specific to most generic
export function RouterOutlet() {
	return (
		<div>
			<Switch>
				{/* sample route */}
				<Route path='/interaction-graph' component={InteractionGraph} />
				<Route path='/home' component={Home} />
				<Route path='/sketches' component={Sketches} />
				<Route path='/animated-heatmap' component={() => { 
					window.location.href = 'https://mc3-files.azurewebsites.net/animated_heatmap.html'; 
					return null;
				}} />
				<Route path='/calendar-heatmap' component={() => { 
					window.location.href = 'https://mc3-files.azurewebsites.net/calendar_heatmap.html'; 
					return null;
				}}/>
				<Route exact path="/" render={() => (
					<Redirect to="/home"/>
				)}/>
			</Switch>
		</div>
	);
}
