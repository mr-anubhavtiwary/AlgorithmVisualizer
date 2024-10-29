import React, { Component } from "react";
import ".././stylesheets/style.css";
class Rect extends Component {
	render() {
		return (
			<div
				className='rect'
				style={{
					height: this.props.rect.width,
					border: this.checkBorder(),
					background: this.checkColor(),
					margin: this.props.marg,
				}}
			></div>
		);
	}
	checkColor = () => {
		if (this.props.rect.isSorted) {
			return "lightgreen";
		} else if (this.props.rect.isSorting) {
			return "#e8984d";
		} else if (this.props.rect.isLeft) {
			return "lightpink";
		} else if (this.props.rect.isRight) {
			return "lightblue";
		} else {
			return "gray";
		}
	};
	checkBorder = () => {
		if (this.props.rect.isRange) {
			return "0px solid black";
		} else {
			return "0px";
		}
	};
}

export default Rect;
