import swap from "./Swap";

class BubbleSort {
	constructor() {
		this.log = [];
	}

	sort(array) {
		for (var i = 1; i < array.length; i++) {
			for (var j = 0; j < array.length; j++) {
				if (array[j] > array[i]) swap(array, j, i, this.log);
			}
		}
	}
}

export default BubbleSort;
