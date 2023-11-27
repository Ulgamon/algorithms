// Frequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Note that you can return the elements in any order.

// Time Complexity - O(n)

export default function findAllDuplicates(integers: Number[]): Number[] {
  let twice: Number[] = [];
  let twiceDict: any = {};

  for (let i = 0; i < integers.length; i++) {
    if (
      twiceDict[integers[i].toString()] &&
      twiceDict[integers[i].toString()] === 1
    ) {
      twiceDict[integers[i].toString()]++;
      twice.push(integers[i]);
    } else {
      twiceDict[integers[i].toString()] = 1;
    }
  }

  return twice
}
