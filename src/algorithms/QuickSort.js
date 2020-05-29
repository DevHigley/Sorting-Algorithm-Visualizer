import swap from "./Swap";

class QuickSort {
	constructor() {
		this.log = [];
	}

	sort(array, low = 0, high = array.length - 1) {
		if (low < high) {
			const pivot = this.partition(array, low, high);
			this.sort(array, low, pivot);
			this.sort(array, pivot + 1, high);
		}
	}

	partition(array, low, high) {
		var pivot = low;
		var leftwall = low;

		for (var i = low + 1; i < high + 1; i++) {
			if (array[i] < array[pivot]) {
				swap(array, i, leftwall + 1, this.log);
				leftwall++;
			}
		}
		swap(array, pivot, leftwall, this.log);
		return leftwall;
	}
}

export default QuickSort;
