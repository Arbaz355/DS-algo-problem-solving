// insertion sort the array of numbers
// Time complexity:- O(n2)
// space complexity:- O(1)

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

// method 1
const insertionSort = (arr, n) => {
  // base case
  if (n <= 1) {
    return arr;
  }

  for (let i = 0; i < n; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j - 1, j);
      j--;
    }
  }

  return arr;
};

// method 2
const insertionSort2 = (arr, n) => {
  // base case
  if (n <= 1) {
    return arr;
  }

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
};

// driver code to run the function
const numbers = [4, 6, 8, 3, 1];
const arrayLength = numbers.length;
const sortedArray = insertionSort(numbers, arrayLength);
console.log(sortedArray);
