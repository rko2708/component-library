export const generateNewArray = (size: number, start: number, end: number) => {
  // generate an array of length = size and numbers between start and end
  if (start < 5 || end < 5) return [];
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * (end - start + 1)) + start;
  }
  return arr;
};

export const bubbleSort = (sortedArray: Array<number>) => {
  let arr = sortedArray;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
