// Frequency Counter - findPair
// Given an unsorted array and a number n, find if there exists a pair of elements
// in the array whose difference is n. This function should return true
// if the pair exists or false if it does not.

// Solve this with the following requirements:
// Time Complexity - O(n)
// Space Complexity - O(n)

export default function findPair(arr: number[], n: number) {
  const dict: any = {};

  for (let i = 0; i < arr.length; i++) {
    if (dict[arr[i] - n] || dict[arr[i] + n]) {
      return true;
    } else if (dict[arr[i]]) {
      dict[arr[i]]++;
    } else {
      dict[arr[i]] = 1;
    }
  }

  return false;
}
