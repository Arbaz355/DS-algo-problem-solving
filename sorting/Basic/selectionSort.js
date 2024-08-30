// selection sort the array of numbers
// Time complexity:- O(n2)
// space complexity:- O(1)

const swap = (arr, a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp; 
}

const selectionSort = (arr, n) => {
  // base case
  if (n <= 1) {
    return arr;
  }

  for (let i = 0; i < n; i++) {
    let minItemIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minItemIndex]) {
        minItemIndex = j;
      }
    }

    swap(arr, minItemIndex, i)
  }

  return arr;
};

// driver code to run the function
const numbers = [4, 6, 8, 3, 1];
const arrayLength = numbers.length;
const sortedArray = selectionSort(numbers, arrayLength);
console.log(sortedArray);
