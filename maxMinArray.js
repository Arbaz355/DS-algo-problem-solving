// find the maximum and minimum number in unsorted array
// [2, 4, 1, 12, 23, 34];

// method 1
const minimumNumber = (arr) => Math.min(...arr);
const maximumNumber = (arr) => Math.max(...arr);

// methods 2
const minNumber = (arr) => {
  let min = arr[0];

  for (let item of arr) {
    if (item < min) {
      min = item;
    }
  }

  return min;
};

const maxNumber = (arr) => {
  let max = arr[0];

  for (let item of arr) {
    if (item > max) {
      max = item;
    }
  }

  return max;
};

// method 3
const getMin = (arr) => {
  arr.sort((a, b) => a - b);

  return arr[0];
};

const getMax = (arr) => {
  arr.sort((a, b) => a - b);

  return arr[arr.length - 1];
};

// method 4
const minNum = (arr) => {
  const min = arr.reduce((acc, curr) => {
    if (curr < acc) {
      return curr;
    }
    return acc;
  }, arr[0]);

  return min;
};

const maxNum = (arr) => {
  const max = arr.reduce((acc, curr) => {
    if (curr > acc) {
      return curr;
    }

    return acc;
  }, arr[0]);

  return max;
};

// driver code
const number = [2, 4, 1, 12, 23, 34];
const result = maxNum(number);
console.log(result);
