import React, { Component } from "react";
import ".././stylesheets/style.css";
class Rect extends Component {
	render() {
		return (
			<div
				className='rect'
				style={{
					height: this.props.rect.width,
					background: this.checkColor(),
					margin: this.props.marg,
					"vertical-align": "middle",
				}}
			></div>
		);
	}
	checkColor = () => {
		if (this.props.rect.isSorted) {
			return "lightgreen";
		} else if (this.props.rect.isSorting) {
			return "lightpink";
		} else {
			return "gray";
		}
	};
}

export default Rect;
