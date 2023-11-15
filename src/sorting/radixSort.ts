export const radixSort = (nums: Array<number>) => {
  let maxDigits = mostDigits(nums);

  for (let i = 0; i < maxDigits; i++) {
    let digitBucket: any[] = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < nums.length; k++) {
      digitBucket[getDigit(nums[k], i)].push(nums[k]);
    }
    nums = [].concat(...digitBucket);
  }
  return nums;
};

export const getDigit = (num: number, place: number) => {
  return Math.floor((Math.abs(num) % 10 ** (place + 1)) / 10 ** place);
};

export const digitCount = (num: number) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

export const mostDigits = (nums: Array<number>) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};
