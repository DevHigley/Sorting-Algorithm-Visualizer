import React from "react";

import HeapSort from "./algorithms/HeapSort";
import QuickSort from "./algorithms/QuickSort";
import BubbleSort from "./algorithms/BubbleSort";
import SelectionSort from "./algorithms/SelectionSort";
import InsertionSort from "./algorithms/InsertionSort";

function Button(props) {
	const { className, onClick, disabled, text } = props;
	return (
		<button className={className} onClick={onClick} disabled={disabled}>
			{text}
		</button>
	);
}

function Slider(props) {
	const { classNameSpan, classNameInput, onChange, disabled, text, min, max, step, value } = props;
	return (
		<div className="slider-container">
			<span className={classNameSpan}>{text}</span>
			<input disabled={disabled} className={classNameInput} onChange={onChange} type="range" min={min} max={max} step={step} value={value} />
		</div>
	);
}

class Menu extends React.Component {
	render() {
		const { sorting, reset, sort, count, setCount, speed, setSpeed } = this.props;
		return (
			<div className="menu">
				<Button className={sorting ? "highlight btn" : "btn"} onClick={() => reset()} text="Reset" />
				<Button className="btn" onClick={() => sort(new HeapSort())} disabled={sorting} text={"Heap\nSort"} />
				<Button className="btn" onClick={() => sort(new QuickSort())} disabled={sorting} text={"Quick\nSort"} />
				<Button className="btn" onClick={() => sort(new BubbleSort())} disabled={sorting} text={"Bubble\nSort"} />
				<Button className="btn" onClick={() => sort(new InsertionSort())} disabled={sorting} text={"Insertion\nSort"} />
				<Button className="btn" onClick={() => sort(new SelectionSort())} disabled={sorting} text={"Selection\nSort"} />
				<Slider
					classNameSpan={sorting ? "disabled label" : "label"}
					classNameInput="slider"
					onChange={(event) => setCount(event.target.value)}
					disabled={sorting}
					text="Count"
					min={10}
					max={100}
					step={1}
					value={count}
				/>
				<Slider
					classNameSpan="label"
					classNameInput="slider reverse"
					onChange={(event) => setSpeed(event.target.value)}
					disabled={false}
					text="Speed"
					min={5}
					max={200}
					step={1}
					value={speed}
				/>
			</div>
		);
	}
}

export default Menu;
