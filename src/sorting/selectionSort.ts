/*
    Selection Sort does things differently but it's still a brute force algorithm and it's not very fast O(n^2)
    It works by starting from the beggining of an array and going through array to find a minimal element
    when it gets to the rnf of the second loop and it found the smallest value it swaps that element with
    the current one
*/

export const selectionSort = (array: Array<number>) => {
  let min = 0;
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      temp = array[min];
      array[min] = array[i];
      array[i] = temp;
    }
  }
  return array;
};
