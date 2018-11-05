import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { Router } from "react-router";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import createBrowserHistory from "history/createBrowserHistory";
import { AppContainer } from "react-hot-loader";

import { CounterStore } from "./stores";

import { App } from "./containers/App";

const routerStore = new RouterStore();
const counterStore = new CounterStore();
const rootStore = {
	routerStore,
	counterStore,
};

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routerStore);

if (process.env.NODE_ENV !== "production") {
	console.log("Staging Mode");
}

const render = () =>
	ReactDOM.render(
		<AppContainer>
			<Provider {...rootStore}>
				<Router history={history}>
					<App />
				</Router>
			</Provider>
		</AppContainer>,
		document.getElementById("root"),
	);

if (module.hot) {
	module.hot.accept(undefined, render);
}

render();
