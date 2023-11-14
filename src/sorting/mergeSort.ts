export const mergeSort = (array: Array<number>) => {
  if (array.length === 1) return array;

  const half = Math.floor(array.length / 2);
  const res1: Array<number> = mergeSort(array.slice(0, half));
  const res2: Array<number> = mergeSort(array.slice(half));

  return merge(res1, res2);
};

const merge = (arr1: Array<number>, arr2: Array<number>) => {
  let length = arr1.length + arr2.length;
  let j = 0;
  let k = 0;
  let arr: Array<number> = [];
  for (let i = 0; i < length; i++) {
    if (j >= arr1.length) {
      arr.push(arr2[k]);
      k++;
    } else if (k >= arr2.length) {
      arr.push(arr1[j]);
      j++;
    } else {
      if (arr1[j] > arr2[k]) {
        arr.push(arr2[k]);
        k++;
      } else {
        arr.push(arr1[j]);
        j++;
      }
    }
  }
  return arr;
};
