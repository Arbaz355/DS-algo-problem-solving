/* check if the items are equal and has same numbers and same frequency of numbers
 parameters => arr1, arr2, @return = true/false */

const isArrayEqual2 = JSON.stringify(num1) == JSON.stringify(num2);

const isArrayEqual = (arr1, arr2) => {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return false;
  }
  const n1 = arr1.length;
  const n2 = arr2.length;
  // base case
  if (n1 !== n2) {
    return false;
  }

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  for (let i = 0; i < n1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};


// Array.isArray(num1)
// arr1.length > 1 && arr2.length > 1
// arr1.length !=== arr2.length;
// sort(num1), sort(num2)

const num1 = [1, 4, 4, 2, 3, 6];
const num2 = [1, 4, 4, 2, 3, 7];
const result = isArrayEqual(num1, num2);
console.log(isArrayEqual2);
