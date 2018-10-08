import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../Home";
require("./style.scss");

class App extends React.Component {
	public render() {
		return (
			<React.Fragment>
				<Switch>
					<Route
						exact
						path="/"
						render={() => <Redirect to="/home" />}
					/>
					<Route path="/home" component={Home} />
					{/* <Route path="/about" component={About} /> */}
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
