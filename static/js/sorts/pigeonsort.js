// pigeonsort.js

async function run() {
    runBtn(pigeonholeSort, elements);
}

async function pigeonholeSort(arr) {
	/* calculate range of values */
	const values = arr.map((e, i) => parseInt(getValue(i)*10))
	const min = Math.min(...values);
	const max = Math.max(...values);
	const range = max - min + 1;

	/* initialize holes array */
	let holes = new Array(range)
	for (i = 0; i < range; i++) {
		holes[i] = new Array();
	}

	/* put elements in holes */
	for (let i = 0; i < arr.length; i++) {
		holes[values[i] - min].push(arr[i]);
	}

	/* move elements from holes back to array */
	let arrIdx1 = 0;
	for (let holeIdx = 0; holeIdx < holes.length; holeIdx++) {
		while (holes[holeIdx].length > 0) {
			const holeElem = holes[holeIdx].pop();
			/* find index of hole element in array */
			const arrIdx2 = arr.findIndex(
				(arrElem) => arrElem === holeElem);
			await swap(arrIdx1++, arrIdx2);
		}
	}
}
