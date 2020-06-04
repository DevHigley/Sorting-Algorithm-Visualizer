import React from "react";
import Bars from "./Bars";
import Menu from "./Menu";

import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { bars: this.createBars(50), swaps: [], log: [], sorting: false, count: 50, speed: 50 };
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) this.reset();
	}

	createBars(count = this.state.count) {
		const bars = [];
		const height = window.screen.height;
		for (var i = 0; i < count; i++) bars.push(Math.random() * (height * 0.65) + height * 0.05);
		return bars;
	}

	sort(sorter) {
		sorter.sort([...this.state.bars]);
		const log = sorter.log;
		//log.unshift({ bars: this.state.bars, swaps: [] });
		log.push({ bars: log[log.length - 1].bars, swaps: [] });
		this.setState({ log: log, sorting: true });
		this.timelapse();
	}

	timelapse(i = 0, bars = this.state.bars) {
		setTimeout(() => {
			if (this.state.bars === bars && i < this.state.log.length) {
				const log = this.state.log[i++];
				this.setState({ bars: log.bars, swaps: log.swaps });
				this.timelapse(i, log.bars);
			} //else this.setState({ sorting: false });
		}, this.state.speed);
	}

	reset() {
		this.setState({ bars: this.createBars(), swaps: [], log: [], sorting: false, interval: null });
	}

	render() {
		return (
			<>
				<Menu
					sorting={this.state.sorting}
					reset={() => this.reset()}
					sort={(sorter) => this.sort(sorter)}
					setCount={(count) => this.setState({ count: count })}
					setSpeed={(speed) => this.setState({ speed: speed })}
				/>
				<Bars bars={this.state.bars} swaps={this.state.swaps} />
				<span className="signature">Rhidlor</span>
			</>
		);
	}
}

export default App;
