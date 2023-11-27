// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

export default function sameFrequency(num1: number, num2: number) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  let obj1: any = {};
  let obj2: any = {};

  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]]) {
      obj1[str1[i]]++;
    } else {
      obj1[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (obj2[str2[i]]) {
      obj2[str2[i]]++;
    } else {
      obj2[str2[i]] = 1;
    }
  }

  for (const key in obj1) {
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }

  return true;
}
