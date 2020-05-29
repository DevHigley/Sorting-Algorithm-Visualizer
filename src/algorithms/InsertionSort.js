import swap from "./Swap";

class InsertionSort {
	constructor() {
		this.log = [];
	}

	sort(array) {
		for (var i = 0; i < array.length; i++) {
			var j = i;
			while (j > 0 && array[j - 1] > array[j]) {
				swap(array, j - 1, j, this.log);
				j--;
			}
		}
	}
}

export default InsertionSort;
