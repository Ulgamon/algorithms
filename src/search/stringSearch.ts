export const stringSearch = (array: Array<string>, value: string) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (array[middle] === value) {
      return middle;
    } else if (checkStringOrder(array[middle], value)) {
      min = middle;
    } else {
      max = middle;
    }
  }

  return -1;
};

const checkStringOrder = (a: string, b: string) => {
  for (let i = 0; i < a.length; i++) {
    let char1 = a[i].toLowerCase();
    let char2 = b[i].toLowerCase();
    if (char1 < char2) {
      return true;
    } else if (char1 > char2) {
      return false;
    }
  }
};
