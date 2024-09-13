// three sum or find the triplets in the array

// time complexity -> o(n3)
const threeSum = (arr, target) => {
  const n = arr.length;
  //base case
  if (n <= 2) {
    return -1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }

  return -1;
};

// driver code to run the function
const numbers = [2, 6, 7, 8, 9, 11, 15];
const result = threeSum(numbers, 52);
console.log(result);
