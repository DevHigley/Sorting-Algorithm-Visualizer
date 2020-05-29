import swap from "./Swap";

class SelectionSort {
	constructor(update) {
		this.log = [];
	}

	sort(array, start = 0) {
		if (start >= array.length) return;

		var smallest = -1;

		for (var i = start; i < array.length; i++) {
			if (i === start) smallest = i;
			else if (array[i] < array[smallest]) smallest = i;
		}

		if (smallest === -1) return;

		swap(array, smallest, start, this.log);
		this.sort(array, start + 1);
	}
}

export default SelectionSort;
