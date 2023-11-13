/* 
    Write a function called sumZero which accepts a sorted array of integers.
    The function should find the first pair where the sum is 0. Return an array
    that includes both values that sum to zero or undefined if a pair does not exist.
*/

export const sumZero = (array: Array<number>) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
};
