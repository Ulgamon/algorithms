// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in the array
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time Complexity: O(N)
// Space Complexity: O(1)

export default function averagePair(arr: number[], avg: number): boolean {
  if (arr.length === 0) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === avg) {
        return true
    } else if (average < avg) {
        left++;
    } else {
        right--;
    }
  }

  return false;
}
