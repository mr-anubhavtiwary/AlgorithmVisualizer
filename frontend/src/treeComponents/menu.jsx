import React, { Component } from "react";
import SimpleSelect from "./simpleSelect";

class Menu extends Component {
	render() {
		return (
			<nav className='nav alert-dark'>
				<SimpleSelect
					pos={0}
					onAlgoChanged={this.props.onAlgoChanged}  // Properly passes algo change handler
				/>
				<button
					className='btn btn-warning btn-lg m-2'
					onClick={this.props.onVisualize}  // Corrected the typo
				>
					Visualize
				</button>
				<button
					onClick={this.props.onRefresh}
					className='btn btn-danger btn-lg m-2'
				>
					Refresh
				</button>
			</nav>
		);
	}
}

export default Menu;
