class MergeSort {
	sort(array) {
		if (array.length <= 1) return array;

		var a = [...array].splice(0, array.length / 2);
		var b = [...array].splice(array.length / 2, array.length);

		a = this.mergeSort([...a]);
		b = this.mergeSort([...b]);

		return this.merge([...a], [...b]);
	}

	merge(a, b) {
		var c = [];

		while (a.length > 0 && b.length > 0) {
			if (a[0].height < b[0].height) {
				c.push(a[0]);
				a.shift();
			} else {
				c.push(b[0]);
				b.shift();
			}
		}

		while (a.length > 0) {
			c.push(a[0]);
			a.shift();
		}

		while (b.length > 0) {
			c.push(b[0]);
			b.shift();
		}

		return [...c];
	}
}

export default MergeSort;
