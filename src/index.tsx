import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { Router } from "react-router";
import { AppContainer } from "react-hot-loader";

import { RootStore } from "./stores";

import { App } from "./containers/App";

if (process.env.NODE_ENV !== "production") {
	console.log("Staging Mode");
}

const rootStore = new RootStore();

const render = () => {
	return ReactDOM.render(
		<AppContainer>
			<Provider {...rootStore}>
				<Router history={rootStore.history}>
					<App />
				</Router>
			</Provider>
		</AppContainer>,
		document.getElementById("root"),
	);
};

if (module.hot) {
	module.hot.accept(undefined, render);
}

render();
