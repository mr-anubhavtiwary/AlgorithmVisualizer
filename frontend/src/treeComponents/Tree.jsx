import React, { useState, useEffect, Fragment } from "react";
import Node from "./Node";
import Navbar from "./navbar";
import Menu from "./menu";
import "../stylesheets/style.css";
import { inOrder, preOrder, postOrder } from "../algorithms/traversals";

// Sample tree data structure
const treeData = {
	value: 1,
	left: {
		value: 2,
		left: {
			value: 4,
			left: null,
			right: null,
		},
		right: null,
	},
	right: {
		value: 3,
		left: {
			value: 5,
			left: null,
			right: null,
		},
		right: {
			value: 6,
			left: null,
			right: null,
		},
	},
};

const Tree = () => {
	const [activeNode, setActiveNode] = useState(null);
	const [visitedNodes, setVisitedNodes] = useState([]); // Track visited nodes
	const [activeLines, setActiveLines] = useState([]); // Track active lines
	const [traversalPath, setTraversalPath] = useState([]); // Track the traversal path
	const [traversalType, setTraversalType] = useState(""); // For dropdown selection
	const [isVisualizing, setIsVisualizing] = useState(false); // Control visualization

	// Traversal Functions
	const handleTraversal = () => {
		if (!traversalType) return; // No traversal selected
		let nodes = [];
		const visit = (node) => nodes.push(node.value);

		switch (traversalType) {
			case "preOrder":
				preOrder(treeData, visit);
				break;
			case "inOrder":
				inOrder(treeData, visit);
				break;
			case "postOrder":
				postOrder(treeData, visit);
				break;
			default:
				break;
		}

		// Highlight nodes and lines sequentially with a delay
		nodes.forEach((nodeValue, index) => {
			setTimeout(() => {
				setActiveNode(nodeValue);
				setVisitedNodes((prevVisited) => [...prevVisited, nodeValue]); // Mark node as visited
				setTraversalPath((prevPath) => [...prevPath, nodeValue]); // Update the traversal path

				// Determine which lines to activate based on the node value
				if (nodeValue === 1) {
					setActiveLines(["root"]);
				} else if (nodeValue === 2 || nodeValue === 3) {
					setActiveLines((prev) => [
						...prev,
						nodeValue === 2 ? "left" : "right",
					]);
				} else if (nodeValue === 4) {
					setActiveLines((prev) => [...prev, "left-left"]);
				} else if (nodeValue === 5 || nodeValue === 6) {
					setActiveLines((prev) => [
						...prev,
						nodeValue === 5 ? "right-left" : "right-right",
					]);
				}
			}, index * 1000); // 1 second delay between each node highlight
		});
	};

	// Start traversal when "Visualize" is clicked
	useEffect(() => {
		if (isVisualizing && traversalType) {
			handleTraversal();
		}
	}, [isVisualizing, traversalType]);

	// Handle when the algorithm is selected from the dropdown
	const handleAlgoChanged = (pos, algo) => {
		if (algo === "0") setTraversalType("inOrder");
		if (algo === "1") setTraversalType("preOrder");
		if (algo === "2") setTraversalType("postOrder");
	};

	// Start the visualization
	const handleVisualize = () => {
		setIsVisualizing(false); // Ensure no ongoing traversal
		setTimeout(() => {
			setIsVisualizing(true); // Start traversal after state reset
		}, 100); // Short delay to reset the state
	};

	// Reset the visualization and refresh
	const handleRefresh = () => {
		setActiveNode(null); // Clear highlighted nodes
		setVisitedNodes([]); // Clear visited nodes
		setActiveLines([]); // Clear active lines
		setTraversalPath([]); // Clear the traversal path
		setIsVisualizing(false); // Stop any ongoing traversal
		setTraversalType(""); // Reset the algorithm choice
	};

	return (
		<Fragment>
			<Navbar />
			<Menu
				onVisualize={handleVisualize}
				onRefresh={handleRefresh}
				onAlgoChanged={handleAlgoChanged}
			/>
			<div className='grid'>
				<div className='tree-grid'>
					{/* Root Node */}
					<div
						className='tree-node'
						style={{ gridRow: 1, gridColumn: 5 }}
					>
						<Node
							value={1}
							isActive={activeNode === 1}
							isVisited={visitedNodes.includes(1)}
						/>
					</div>

					{/* Left Line (45-degree) */}
					<div
						className={`left-line ${
							activeLines.includes("left")
								? "active animated"
								: ""
						}`}
						style={{ gridRow: 2, gridColumn: 4 }}
					></div>

					{/* Right Line (-45-degree) */}
					<div
						className={`right-line ${
							activeLines.includes("right")
								? "active animated"
								: ""
						}`}
						style={{ gridRow: 2, gridColumn: 6 }}
					></div>

					{/* Left Child Node */}
					<div
						className='tree-node'
						style={{ gridRow: 3, gridColumn: 3 }}
					>
						<Node
							value={2}
							isActive={activeNode === 2}
							isVisited={visitedNodes.includes(2)}
						/>
					</div>

					{/* Left Grandchild Line */}
					<div
						className={`left-line ${
							activeLines.includes("left-left")
								? "active animated"
								: ""
						}`}
						style={{ gridRow: 4, gridColumn: 2 }}
					></div>

					{/* Left Grandchild Node */}
					<div
						className='tree-node'
						style={{ gridRow: 5, gridColumn: 1 }}
					>
						<Node
							value={4}
							isActive={activeNode === 4}
							isVisited={visitedNodes.includes(4)}
						/>
					</div>

					{/* Right Child Node */}
					<div
						className='tree-node'
						style={{ gridRow: 3, gridColumn: 7 }}
					>
						<Node
							value={3}
							isActive={activeNode === 3}
							isVisited={visitedNodes.includes(3)}
						/>
					</div>

					{/* Right Grandchildren */}

					{/* Left Line (45-degree) */}
					<div
						className={`left-line ${
							activeLines.includes("right-left")
								? "active animated"
								: ""
						}`}
						style={{ gridRow: 4, gridColumn: 6 }}
					></div>

					{/* Right Line (-45-degree) */}
					<div
						className={`right-line ${
							activeLines.includes("right-right")
								? "active animated"
								: ""
						}`}
						style={{ gridRow: 4, gridColumn: 8 }}
					></div>

					{/* Right Grandchild Nodes */}
					<div
						className='tree-node'
						style={{ gridRow: 5, gridColumn: 5 }}
					>
						<Node
							value={5}
							isActive={activeNode === 5}
							isVisited={visitedNodes.includes(5)}
						/>
					</div>
					<div
						className='tree-node'
						style={{ gridRow: 5, gridColumn: 9 }}
					>
						<Node
							value={6}
							isActive={activeNode === 6}
							isVisited={visitedNodes.includes(6)}
						/>
					</div>
				</div>
			</div>

			{/* Traversed Nodes Display */}
			<div className='traversal-display'>
				<h3>Traversed Nodes: </h3>
				<p>{traversalPath.join(" ") || "No nodes traversed yet"}</p>
			</div>
		</Fragment>
	);
};

export default Tree;
