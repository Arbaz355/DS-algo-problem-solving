/* write a function to binary the search in the sorted array
 1) return the item index if item is found
 2) return -1 if item not found 
 Time complexity:- best case - O(1) worst case:- O(logN)
 */

//  method 1 (iterative approach)
const binarySearch = (arr, target) => {
  // base case
  if (arr.length <= 0) {
    return -1;
  }

  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2);

    if (arr[midIndex] === target) {
      return midIndex;
    } else if (target > arr[midIndex]) {
      startIndex = midIndex + 1;
    } else {
      endIndex = midIndex - 1;
    }
  }

  return -1;
};

// method 2 (recursive approach)
const binarySearch2 = (arr, startIndex, endIndex, target) => {
  if (arr.length <= 0) {
    return -1;
  }

  if (endIndex >= startIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2);

    if (arr[midIndex] === target) {
      return midIndex;
    } else if (target > arr[midIndex]) {
      return binarySearch2(arr, midIndex + 1, endIndex, target);
    } else {
      return binarySearch2(arr, startIndex, midIndex - 1, target);
    }
  }

  return -1;
};

// driver code to run the function
const numbers = [4, 8, 9, 11, 45, 55, 67, 82, 88];
const indexOfItem = binarySearch2(numbers, 0, numbers.length -1, 4);
console.log(indexOfItem);
