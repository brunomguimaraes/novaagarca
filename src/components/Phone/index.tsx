import * as React from "react";
import { Icon } from "antd";

const s = require("./style.scss");

export class Phone extends React.Component<{}, {}> {
	public render() {
		return (
			<div className={s.phoneContainer}>
				<div className={s.phoneIcon}>
					<Icon
						type="phone"
						style={{ fontSize: "24px", color: "#ecf0f1" }}
					/>
				</div>
				<div className={s.phoneNumber}>+55 (22) 2622-2291</div>
			</div>
		);
	}
}
