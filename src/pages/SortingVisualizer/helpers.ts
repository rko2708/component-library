export const generateNewArray = (size: number, start: number, end: number) => {
  // generate an array of length = size and numbers between start and end
  if (start < 5 || end < 5) return [];
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * (end - start + 1)) + start;
  }
  return arr;
};

export const bubbleSortSteps = (arr: Array<number>) => {
  let sortedArray = [...arr];
  let steps = [];
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      steps.push({
        array: [...sortedArray],
        comparing: [j, j + 1],
        swapped: false,
      });
      if (sortedArray[j] > sortedArray[j + 1]) {
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
        steps.push({
          array: [...sortedArray],
          comparing: [j, j + 1],
          swapped: true,
        });
      }
    }
  }
  steps.push({
    array: [...sortedArray],
    comparing: [],
    swapped: false,
  });
  return steps;
};
