// quick sort the array of numbers or char
// Time complexity:- Best :- Ω (N log (N)  average case:- θ ( N log (N)) worst case:- O(N ^ 2)
// Space complexity:- Best case:-  O(1) worst case:- O ( N )

// pick the pivot and divide the array
const quickSort = (arr) => {
  const n = arr.length;
  // base case
  if (n <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const leftArr = [];
  const rightArr = [];

  for (let i = 1; i < n; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

// driver code to run the function
const numbers = [4, 6, 8, 3, 1];
const sortedArray = quickSort(numbers);
console.log(sortedArray);
