import * as React from "react";

const s = require("./style.scss");

export class Footer extends React.Component<{}, {}> {
	public render() {
		return (
			<header className={s.footer}>
				<div>Footer</div>
				<span>
					Rua E, 41 - Prainha - Arraial do Cabo - RJ - CEP 28930-000
				</span>
				<span>(22) 2622-2291 Fax: (22) 2622-4844</span>
			</header>
		);
	}
}
