import * as React from "react";
import { observer } from "mobx-react";
import IconZak from "../../assets/Zak";

const s = require("./style.scss");

interface IProps {}

@observer
export class Home extends React.Component<IProps, {}> {
	public render() {
		return (
			<div className={s.container}>
				<IconZak />
			</div>
		);
	}
}
