import React, { Component } from "react";
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";
import RangeSlider from "./doubleSlider";

class Menu extends Component {
	render() {
		return (
			<nav className='nav alert-dark'>
				<button
					className='btn btn-secondary m-2'
					onClick={this.props.onRandomize}
					disabled={this.props.disable}
					style={this.isClickable()}
				>
					Randomize
				</button>

				<RangeSlider disable={this.props.disable} />
				<DiscreteSlider
					default={20}
					min={10}
					max={100}
					step={10}
					title='Numbers'
					onCountChange={this.props.onCountChange}
					disable={this.props.disable}
				/>
				<DiscreteSlider
					default={50}
					min={10}
					max={100}
					step={1}
					title='Speed'
					onCountChange={this.props.onSpeedChange}
					disable={false}
				/>
				<SimpleSelect
					pos={0}
					onAlgoChanged={this.props.onAlgoChanged}
				/>
				<button
					className='btn btn-warning btn-lg m-2'
					onClick={this.props.onViusalize}
					disabled={this.props.disable}
					style={this.isClickable()}
				>
					Visualize
				</button>
			</nav>
		);
	}
	isClickable = () => {
		if (this.props.disable) {
			return { cursor: "not-allowed" };
		} else {
			return {};
		}
	};
}

export default Menu;
