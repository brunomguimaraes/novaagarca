import * as React from "react";
import { Link } from "react-router-dom";

const s = require("./style.scss");

interface IButtonProps {
	className?: string;
	onClick?: () => void | undefined;
	buttonStyle?: string;
	type?: "reset" | "submit";
	to?: string;
	disabled?: boolean;
}

class Button extends React.Component<IButtonProps, {}> {
	public render(): JSX.Element {
		let className = this.props.className;
		className += this.props.buttonStyle
			? ` ${s[this.props.buttonStyle]} `
			: "";

		if (this.props.to) {
			return (
				<Link to={this.props.to} className={className}>
					{this.props.children}
				</Link>
			);
		}

		className += ` ${s.button} `;
		return (
			<button
				onClick={this.props.onClick}
				type={this.props.type || "button"}
				className={className}
				disabled={!!this.props.disabled}
			>
				{this.props.children}
			</button>
		);
	}
}

export default Button;
