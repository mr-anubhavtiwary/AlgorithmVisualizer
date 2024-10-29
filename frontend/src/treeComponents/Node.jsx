import React from "react";
import ".././stylesheets/style.css";

const Node = ({ value, isActive, isVisited }) => {
	return (
		<div className={`tree-node ${isActive ? "active pulsate" : ""} ${isVisited ? "visited" : ""}`}>
			{value}
		</div>
	);
};

export default Node;
