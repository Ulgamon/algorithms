/*
    Insertion Sort works by starting at the beggining of the array and looking if the element is in the right place on every iteration
*/

export const insertionSort = (array: Array<number>) => {
  let temp = 0;
  let currValue = 0;
  for (let i = 1; i < array.length; i++) {
    currValue = array[i];
    for (let j = i - 1; j >= 0 && array[j] > currValue; j--) {
        temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
    }
  }
  return array;
};
