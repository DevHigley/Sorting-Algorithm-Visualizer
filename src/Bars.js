import React from "react";

function Bars(props) {
	return (
		<div className="bars">
			{props.bars.map((height, index) => {
				return <div key={index} className={props.swaps.includes(index) ? "bar swapping" : "bar"} style={{ height: height }} />;
			})}
		</div>
	);
}

export default Bars;
