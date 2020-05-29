import React from "react";

import HeapSort from "./algorithms/HeapSort";
import QuickSort from "./algorithms/QuickSort";
import BubbleSort from "./algorithms/BubbleSort";
import SelectionSort from "./algorithms/SelectionSort";
import InsertionSort from "./algorithms/InsertionSort";

class Menu extends React.Component {
	render() {
		const { sorting, reset, sort, count, setCount, speed, setSpeed } = this.props;
		return (
			<div className="menu">
				<button className={sorting ? "highlight btn" : "btn"} onClick={() => reset()}>
					Reset
				</button>
				<button disabled={sorting} className="btn" onClick={() => sort(new QuickSort())}>
					Quick
					<br />
					Sort
				</button>
				<button disabled={sorting} className="btn" onClick={() => sort(new BubbleSort())}>
					Bubble
					<br />
					Sort
				</button>
				<button disabled={sorting} className="btn" onClick={() => sort(new InsertionSort())}>
					Insertion
					<br />
					Sort
				</button>
				<button disabled={sorting} className="btn" onClick={() => sort(new SelectionSort())}>
					Selection
					<br />
					Sort
				</button>
				<button disabled={sorting} className="btn" onClick={() => sort(new HeapSort())}>
					Heap
					<br />
					Sort
				</button>
				<div className="slider-container">
					<span className={sorting ? "disabled label" : "label"}>Count</span>
					<input disabled={sorting} className="slider" type="range" min="10" max="100" step="1" value={count} onChange={(event) => setCount(event.target.value)} />
				</div>
				<div className="slider-container">
					<span className="label">Speed</span>
					<input className="slider reverse" type="range" min="5" max="200" step="1" value={speed} onChange={(event) => setSpeed(event.target.value)} />
				</div>
			</div>
		);
	}
}

export default Menu;
