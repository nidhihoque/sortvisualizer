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

  for (i = 0; i < MAX_HOLES; i++)
    nPigeons[i] = 0;

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

  for (i = 0; i < MAX_HOLES; i++)
    nPigeons[i] = 0;

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
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

public static void pigeonHoleSort(int arr[]) {
  int min = minimum(arr);
  int max = maximum(arr);
  int range = max - min + 1;

  List<Stack<Integer>> holes = new ArrayList<>(range);
  for (int i = 0; i < range; i++)
    holes.add(i, new Stack<>());

  for (int elem : arr)
    holes.get(elem - min).push(elem);

  int i = 0;
  for (Stack<Integer> hole : holes)
    while (!hole.empty())
      arr[i++] = hole.pop();
}

public static int minimum(int arr[]) {
  int min = arr[0];
  for (int i = 1; i < arr.length; i++)
    if (arr[i] < min)
      min = arr[i];
  return min;
}

public static int maximum(int arr[]) {
  int max = arr[0];
  for (int i = 1; i < arr.length; i++)
    if (arr[i] > max)
      max = arr[i];
  return max;
}`,
	"JavaScript": `
function pigeonHoleSort(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min + 1;

  const holes = new Array(range);
  for (let i = 0; i < holes.length; i++)
    holes[i] = new Array();

  for (let i = 0; i < arr.length; i++)
    holes[arr[i] - min].push(arr[i]);

  let i = 0;
  for (let j = 0; j < holes.length; j++)
    while (holes[j].length > 0)
      arr[i++] = holes[j].pop();
}`,
	"Python": `
def pigeon_hole_sort(arr: list[int]):
  val_min = min(arr)
  val_max = max(arr)
  val_range = val_max - val_min + 1

  holes = []
  for i in range(val_range):
    holes.append([])

  for x in arr:
    holes[x - val_min].append(x)

  i = 0
  for hole in holes:
    while len(hole) > 0:
      arr[i] = hole.pop()
      i += 1`
}
