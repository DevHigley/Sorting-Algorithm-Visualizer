import swap from "./Swap";

class HeapSort {
	constructor(update) {
		this.log = [];
	}

	sort(array) {
		var n = array.length;

		for (var i = n / 2 - 1; i >= 0; i--) this.heapify(array, n, i);

		// eslint-disable-next-line no-redeclare
		for (var i = n - 1; i > 0; i--) {
			swap(array, 0, i, this.log);
			this.heapify(array, i, 0);
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

/*
import swap from "./Swap";

class HeapSort {
	constructor(update) {
		this.log = [];
	}

	sort(array) {
		this.buildMaxHeap(array);
		for(var i = array.length; i > 1; i--){
			swap(array, 1, i, this.log)
			this.heapify(array, 1)
		}
	}

	buildMaxHeap(array) {
		for (var i = Math.floor(array.length / 2); i > 1; i--) this.heapify(array, i);
	}

	heapify(array, i) {
		var max = i;
		var left = i * 2;
		var right = i * 2 + 1;

		if (left <= array.length && array[left] > array[i]) max = left;
		if (right <= array.length && array[right] > array[max]) max = right;

		if (max != i) {
			swap(array, i, max, this.log);
			this.heapify(array, max);
		}
	}
}

export default HeapSort;
*/
