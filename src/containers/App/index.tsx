import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header } from "../../components/Header";
import { Home } from "../Home";
import { About } from "../About";
import { MainSlider } from "../../components/MainSlider";

require("./style.scss");

export class App extends React.Component {
	public render() {
		return (
			<>
				<Header />

				<Switch>
					<Route
						exact
						path="/"
						render={() => <Redirect to="/home" />}
					/>
					<Route path="/home" component={Home} />
					<Route path="/about" component={About} />
				</Switch>
				<MainSlider />
			</>
		);
	}
}
