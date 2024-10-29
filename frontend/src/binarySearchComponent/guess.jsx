import React, { Component } from "react";
import RangeSlider from "./doubleSlider";

class Guess extends Component {
	getMid = () => {
		const mid = Math.floor((this.props.upper + this.props.lower) / 2);
		return mid;
	};
	render() {
		return (
			<div>
				<div>
					<div className='card card-body'>
						<center style={{ justifyContent: "center" }}>
							<RangeSlider
								upper={this.props.upper}
								lower={this.props.lower}
								max={this.props.max}
							/>
						</center>
					</div>
				</div>
				<h1>Is you number greater than {this.getMid()}?</h1> <br />
				<button
					className='btn btn-lg btn-success m-2'
					onClick={this.props.yesButton}
				>
					Yes
				</button>
				<button
					className='btn btn-lg btn-danger m-2'
					onClick={this.props.noButton}
				>
					No
				</button>{" "}
				<br />
			</div>
		);
	}
}

export default Guess;
