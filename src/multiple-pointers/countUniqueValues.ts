/*
    Implement a function called countUniqueValues, which accepts a sorted array,
    and counts the unique values in the array. There can be negative numbers in the array,
    but it will always be sorted.
*/

// It has O(n) time complexity because we circle once through array;
export const countUniqueValues = (array: Array<number>) => {
  if (array.length === 0) return 0;

  let prevValue = array[0];
  let uniqueValues = 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== prevValue) {
      uniqueValues++;
      prevValue = array[i];
    }
  }
  return uniqueValues;
};
