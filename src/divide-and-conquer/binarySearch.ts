export const binarySearch = (array: Array<number>, number: number) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (array[middle] < number) {
      min = middle + 1;
    } else if (array[middle] > number) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};
