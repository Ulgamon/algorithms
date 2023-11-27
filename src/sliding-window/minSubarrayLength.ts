// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Time Complexity - O(n)
// Space Complexity - O(1)

export default function minSubArrayLen(nums: number[], n: number): number {
  if (n <= 0) return 0;
  let minLength = 0;
  let totalSum = 0;

  let j = 0;
  while (totalSum < n && j < nums.length) {
    totalSum += nums[j++];
    minLength++;
  }

  if (totalSum < n) {
    return 0;
  }

  let k = 0;
  while (j <= nums.length) {
    if (totalSum - nums[k] >= n) {
      totalSum -= nums[k++];
      minLength--;
    } else {
      totalSum -= nums[k++];
      totalSum += nums[j++];
    }
  }

  return minLength;
}
