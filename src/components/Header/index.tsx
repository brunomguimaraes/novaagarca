import * as React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { Phone } from "../Phone";

const s = require("./style.scss");

export class Header extends React.Component<{}, {}> {
	public render() {
		return (
			<header className={s.header}>
				<Link to="/" className={s.title}>
					<Logo />
				</Link>
				<ul className={s.menu}>
					<li>
						<Link className={s.menuItem} to="/">
							<span>A Pousada</span>
						</Link>
					</li>
					<li>
						<Link className={s.menuItem} to="/">
							Acomodações
						</Link>
					</li>
					<li>
						<Link className={s.menuItem} to="/">
							Arraial
						</Link>
					</li>
					<li>
						<Link className={s.menuItem} to="/about">
							Contato
						</Link>
					</li>
				</ul>
				<Phone />
			</header>
		);
	}
}
