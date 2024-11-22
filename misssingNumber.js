// find the missing number in the sorted or unsorted array

const missingNumber = (arr) => {
  // base case
  if (arr.length <= 1) {
    return 0;
  }

  let missingNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      missingNumber = arr[i] + 1;
      return missingNumber;
    }
  }

  return missingNumber;
};

// methods 2
const missingNumber2 = (arr) => {
  // base case
  if (arr.length <= 1) {
    return 0;
  }

  const sumOfConsecutiveNumber = (n) => {
    return (n * (n + 1)) / 2;
  };

  const expectedSum = sumOfConsecutiveNumber(arr.length + 1);

  let sum = 0;
  for (let number of arr) {
    sum += number;
  }

  return expectedSum - sum;
};

//driver code
const arr = [1, 2, 3, 5];
           // [2, 4, 6, 8, 10]
//output -> 4 (since 4 is missing number here)
const result = missingNumber2(arr);
console.log(result);
