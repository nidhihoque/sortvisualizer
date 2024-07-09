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

var codes = {
	"C": `
int minimum(int arr[], int n) {
	int min, i;
	min = arr[0];
	for (i = 1; i < n; i++) {
		if (arr[i] < min)
			min = arr[i];
	}
	return min;
}

int maximum(int arr[], int n) {
	int max, i;
	max = arr[0];
	for (i = 1; i < n; i++) {
		if (arr[i] > max)
			max = arr[i];
	}
	return max;
}

void pigeonHoleSort(int arr[], int n) {
	static int holes[MAX_HOLES][MAX_HOLE_DEPTH];
	static int nPigeons[MAX_HOLES];
	int i, j, min, max, range;

	for (i = 0; i < MAX_HOLES; i++) {
		nPigeons[i] = 0;
	}

	min = minimum(arr, n);
	max = maximum(arr, n);
	range = max - min + 1;

	for (i = 0; i < n; i++) {
		j = arr[i] - min;
		holes[j][nPigeons[j]++] = arr[i];
	}

	i = 0;
	for (j = 0; j < range; j++) {
		while (nPigeons[j] > 0) {
			arr[i++] = holes[j][--nPigeons[j]];
		}
	}
}`,
	"C++": `
int minimum(int arr[], int n) {
	int min, i;
	min = arr[0];
	for (i = 1; i < n; i++) {
		if (arr[i] < min)
			min = arr[i];
	}
	return min;
}

int maximum(int arr[], int n) {
	int max, i;
	max = arr[0];
	for (i = 1; i < n; i++) {
		if (arr[i] > max)
			max = arr[i];
	}
	return max;
}

void pigeonHoleSort(int arr[], int n) {
	static int holes[MAX_HOLES][MAX_HOLE_DEPTH];
	static int nPigeons[MAX_HOLES];
	int i, j, min, max, range;

	for (i = 0; i < MAX_HOLES; i++) {
		nPigeons[i] = 0;
	}

	min = minimum(arr, n);
	max = maximum(arr, n);
	range = max - min + 1;

	for (i = 0; i < n; i++) {
		j = arr[i] - min;
		holes[j][nPigeons[j]++] = arr[i];
	}

	i = 0;
	for (j = 0; j < range; j++) {
		while (nPigeons[j] > 0) {
			arr[i++] = holes[j][--nPigeons[j]];
		}
	}
}`,
	"Java": `
TODO`,
	"JavaScript": `
TODO`,
	"Python": `
TODO`
}
