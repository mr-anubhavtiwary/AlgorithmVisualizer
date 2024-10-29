import React, { Component } from "react";

import Rects from "./rects";
import {
	bubbleSort,
	selectionSort,
	insertionSort,
} from "../algorithms/sortingAlgorithms";
import Navbar from "./navbar";
import Menu from "./menu";

class Sort extends Component {
	state = {
		count: 20,
		rects: [],
		speed: 50,
		isRunning: false,
		isRunning1: false,
		algo: 0,
	};

	componentDidMount() {
		const rect = getInitialRects(this.state.count);
		this.setState({ rects: rect });
	}

	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Menu
					onViusalize={this.handleSort}
					onRandomize={this.handleRandomize}
					onRefresh={this.handleRefresh}
					onCountChange={this.handleCountChange}
					onAlgoChanged={this.handleAlgoChanged}
					onSpeedChange={this.handleSpeedChanged}
				/>
				<div className=' justify-content-center'>
					<Rects speed={this.state.speed} rects={this.state.rects} />
				</div>
			</React.Fragment>
		);
	}
	handleRandomize = () => {
		const rect = getInitialRects(this.state.count);
		this.setState({ rects: rect });
	};
	handleRefresh = () => {
		const rects = this.state.rects;
		for (let i = 0; i < rects.length; i++) {
			const rect = { ...rects[i], isSorted: false, isSorting: false };
			rects[i] = rect;
		}
		this.setState({ rects });
	};

	handleCountChange = (val) => {
		this.setState({ count: val });
		this.handleRandomize();
	};
	handleAlgoChanged = (pos, val) => {
		if (pos === 0) {
			this.setState({ algo1: val });
		}
	};
	handleSpeedChanged = (val) => {
		const speed = 760 - val * 7.5;
		this.setState({ speed });
	};
	handleSort = () => {
		this.setState({ isRunning: true });
		let steps1;
		switch (this.state.algo) {
			case 0:
				steps1 = bubbleSort(this.state.rects);
				break;
			case 1:
				steps1 = selectionSort(this.state.rects);
				break;
			case 2:
				steps1 = insertionSort(this.state.rects);
				break;
			default:
				steps1 = bubbleSort(this.state.rects);
				break;
		}
		this.handleAlgo(steps1);
	};
	handleAlgo = async (steps) => {
		this.setState({ isRunning1: true });

		const prevRect = this.state.rects;
		for (let i = 0; i < steps.length; i++) {
			if (i !== 0) {
				prevRect[steps[i - 1].xx] = {
					...prevRect[steps[i - 1].xx],
					isSorting: false,
				};
				prevRect[steps[i - 1].yy] = {
					...prevRect[steps[i - 1].yy],
					isSorting: false,
				};
			}
			if (steps[i].xx === steps[i].yy) {
				prevRect[steps[i].xx] = {
					...prevRect[steps[i].xx],
					isSorted: true,
					isSorting: false,
				};
			} else if (steps[i].changed) {
				const recti = { ...prevRect[steps[i].xx], isSorting: true };
				const rectj = { ...prevRect[steps[i].yy], isSorting: true };
				prevRect[steps[i].yy] = recti;
				prevRect[steps[i].xx] = rectj;
			} else {
				prevRect[steps[i].xx] = {
					...prevRect[steps[i].xx],
					isSorting: true,
				};
				prevRect[steps[i].yy] = {
					...prevRect[steps[i].yy],
					isSorting: true,
				};
			}
			if (i === steps.length - 1) {
				this.setState({ isRunning1: false });
				if (this.state.isRunning2 === false) {
					this.setState({ isRunning: false });
				}
			}
			this.setState({ rects: prevRect });
			await sleep(this.state.speed);
		}
	};
}
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
const getInitialRects = (tot) => {
	const rects = [];
	for (let i = 0; i < tot; i++) {
		rects.push(getRect(i));
	}
	return rects;
};
const getRect = (kk) => {
	return {
		width: Math.floor(Math.random() * 200) + 50,
		isSorted: false,
		isSorting: false,
		kk: kk,
	};
};
export default Sort;
