// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

export default function isSubsequence(str1: string, str2: string) {
  let match = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1[match] === str2[i]) {
      match++;
    }
    if (match === str1.length) return true;
  }

  return match === str1.length;
}
