/*
    Write a function called maxSubarraySum hich accepts an array of integers and a number called n.
    The function should calculate the maximun sum of n consecutive elements in the array.
*/

// This algorithm have 0(n) time complexity which is great
export const maxSubarraySum = (array: Array<number>, n: number) => {
  if (n > array.length || n <= 0) return null;

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    tempSum += array[i];
  }
  maxSum = tempSum;

  let j = 0;
  for (let i = n; i < array.length; i++) {
    tempSum -= array[j++];
    tempSum += array[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
};
