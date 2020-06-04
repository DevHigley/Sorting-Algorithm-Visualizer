import swap from "./Swap";

class HeapSort {
	constructor(update) {
		this.log = [];
	}

	sort(array) {
		var n = array.length;

		for (var i = n / 2 - 1; i >= 0; i--) this.heapify(array, n, i);

		for (var j = n - 1; j > 0; j--) {
			swap(array, 0, j, this.log);
			this.heapify(array, j, 0);
		}
	}

	heapify(array, n, i) {
		var largest = i;
		var left = 2 * i + 1;
		var right = 2 * i + 2;

		if (left < n && array[left] > array[largest]) largest = left;
		if (right < n && array[right] > array[largest]) largest = right;
		if (largest !== i) {
			swap(array, i, largest, this.log);
			this.heapify(array, n, largest);
		}
	}
}

export default HeapSort;
