// bubble sort the array of numbers or char
// Time complexity:- O(n2)
// Space complexity:- O(1)

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// method 1
const bubbleSort = (arr, n) => {
  // base case
  if (n < 1) {
    return arr;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // swap the numbers
      if (arr[i] > arr[j]) {
        swap(arr, i, j)
      }
    }
  }

  return arr;
};

// method 2
const bubbleSort2 = (arr, n) => {
  // base case
  if (n <= 1) {
    return arr;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // swapping the numbers
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;
};

// diver code for test
const numbers = [2, 5, 3, 7, 8, 4, 3];
const arrayLength = numbers.length;
const sortedArray = bubbleSort(numbers, arrayLength);
console.log(sortedArray);
