async function run() {
    runBtn(slowSort, elements, 0, elements.length - 1);
}

async function slowSort(array, i, j) {
    if (i >= j) return;

    let mid = Math.floor((i + j) / 2);

    await slowSort(array, i, mid);
    await slowSort(array, mid + 1, j);

    if (compare(mid, j)) {
        await swap(mid, j);
    }

    await slowSort(array, i, j - 1);
}

var codes = {
    "C": `
void slowSort(int array[], int i, int j) {
    if (i >= j) return;

    int mid = (i + j) / 2;

    slowSort(array, i, mid);
    slowSort(array, mid + 1, j);

    if (array[mid] > array[j]) {
        int temp = array[mid];
        array[mid] = array[j];
        array[j] = temp;
    }

    slowSort(array, i, j - 1);
}`,
    "C++": `
void slowSort(int array[], int i, int j) {
    if (i >= j) return;

    int mid = (i + j) / 2;

    slowSort(array, i, mid);
    slowSort(array, mid + 1, j);

    if (array[mid] > array[j]) {
        int temp = array[mid];
        array[mid] = array[j];
        array[j] = temp;
    }

    slowSort(array, i, j - 1);
}`,
    "Java": `
public static void slowSort(int[] array, int i, int j) {
    if (i >= j) return;

    int mid = (i + j) / 2;

    slowSort(array, i, mid);
    slowSort(array, mid + 1, j);

    if (array[mid] > array[j]) {
        int temp = array[mid];
        array[mid] = array[j];
        array[j] = temp;
    }

    slowSort(array, i, j - 1);
}`,
    "JavaScript": `
function slowSort(array, i, j) {
    if (i >= j) return;

    let mid = Math.floor((i + j) / 2);

    await slowSort(array, i, mid);
    await slowSort(array, mid + 1, j);

    if (array[mid] > array[j]) {
        // Swap array[mid] and array[j]
        let temp = array[mid];
        array[mid] = array[j];
        array[j] = temp;
    }

    await slowSort(array, i, j - 1);
}`,
    "Python": `
def slow_sort(array, i, j):
    if i >= j:
        return

    mid = (i + j) // 2

    slow_sort(array, i, mid)
    slow_sort(array, mid + 1, j)

    if array[mid] > array[j]:
        array[mid], array[j] = array[j], array[mid]

    slow_sort(array, i, j - 1)`
}
