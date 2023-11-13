/*  
Given two strings, write a function to determine if the second string is an anagram of the first.
An Anagram is a word, phrase, or name formed by rearranging the letters of another, such
as cinema, formed from iceman.
*/

export function validAnagram(str1: string, str2: string) {
  if (str1.length !== str1.length) return false;
  if (str1 === str2) return true;

  const str1dict: any = {};
  const str2dict: any = {};

  // Time compexity O(n) for this loop
  for (let i = 0; i < str1.length; i++) {
    str1dict[str1[i]] = (str1dict[str1[i]] || 0) + 1;
  }

  // Time complexity O(n) for this loop
  for (let i = 0; i < str2.length; i++) {
    str2dict[str2[i]] = (str2dict[str2[i]] || 0) + 1;
  }

  // O(n) for looping through object
  for (const key in str1dict) {
    if (str1dict[key] !== str2dict[key]) {
      return false;
    }
  }

  return true;
}

// Concusion: O(n) is much better than O(n^2)
