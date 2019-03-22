import * as React from "react";
import { MainSlider } from "../../components/MainSlider";

const s = require("./style.scss");
export class Home extends React.Component<{}, {}> {
	public render() {
		return (
			<div className={s.container}>
				<MainSlider />
				<div>Bem-vindo</div>
				<div className={s.dividerContainer}>
					<div className={s.divider} />
					<div className={s.divider} />
				</div>
			</div>
		);
	}
}
