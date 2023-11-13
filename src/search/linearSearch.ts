export const linearSearch = (array: Array<string>, value: string) => {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) return true;
  }

  return false;
};
