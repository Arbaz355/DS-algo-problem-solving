/* You are given a list of sorted non-descending integer arrays, write a function to merge them into one sorted non-descending array.
Question link:- https://bigfrontend.dev/problem/merge-sorted-arrays
*/

/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]}
 */

const merge = (arr) => {
  // base case
  if (arr.length <= 0) {
    return [];
  }

  if (arr.length === 1) {
    return [...arr[0]];
  }

  const flattedArray = [];

  for (let i = 0; i < arr.length; i++) {
    flattedArray.push(...arr[i]);
  }
  flattedArray.sort((a, b) => a - b);

  return flattedArray;
};

/* output -> [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 100 , 200, 200, 1000, 1000, 10000, 1000000, 10000001]
 1) empty return empty array
 2) single item return the 0th index and flatted value
 3) main logic -> flat -> sort */

// driver code
const result = merge([
  [1, 1, 1, 100, 1000, 10000],
  [1, 2, 2, 2, 200, 200, 1000],
  [1000000, 10000001],
  [2, 3, 3],
]);
console.log(result);