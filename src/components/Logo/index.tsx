import * as React from "react";

const s = require("./style.scss");

export class Logo extends React.Component<{}, {}> {
	public render() {
		return (
			<header className={s.logo}>
				<div>Logo Placeholder</div>
			</header>
		);
	}
}
