import { validAnagram } from "./freq-counter/anagram";
import { mergeSort } from "./sorting/mergeSort";

console.log(validAnagram("iceman", "cineag"));

let arr = mergeSort([
  18, 23, -1, -100, 0, 1000, 32, 54, 765, 123, 234, 234, 54, 6,
]);

console.log(arr.length);
