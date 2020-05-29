export default function swap(array, a, b, log) {
	const temp = array[a];
	array[a] = array[b];
	array[b] = temp;
	log.push({ bars: [...array], swaps: [a, b] });
}
