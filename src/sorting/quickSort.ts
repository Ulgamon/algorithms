export const quickSort = (
  arr: Array<number>,
  start: number = 0,
  end: number = arr.length
) => {
  if (start < end) {
    let pivotIndex: number = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
};

export const pivot = (
  arr: Array<number>,
  start: number = 0,
  end: number = arr.length
) => {
  let pivot = start;
  let currIndex = start;
  let temp = 0;
  for (let i = start + 1; i < end; i++) {
    if (arr[pivot] > arr[i]) {
      temp = arr[i];
      arr[i] = arr[++currIndex];
      arr[currIndex] = temp;
    }
  }

  temp = arr[pivot];
  arr[pivot] = arr[currIndex];
  arr[currIndex] = temp;
  return currIndex;
};
