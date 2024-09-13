// write a function to move all the zeros to right or left, with changing the other array item positions

// method 1
const moveZeroToLeft = (arr) => {
  if (arr.length <= 0) return [];
  const newArr = [];
  let zeroCount = 0;

  for (let item of arr) {
    if (item !== 0) {
      newArr.push(item);
    } else {
      zeroCount++;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    // use .push(0) to add move zero to the right
    newArr.unshift(0);
  }

  return newArr;
};

// methods 2
const moveZeroToLeft2 = (arr) => {
  if (arr.length <= 0) return [];
  const nonZeroArray = [];
  const zeroArray = [];

  for (let item of arr) {
    if (item === 0) {
      zeroArray.push(item);
    } else {
      nonZeroArray.push(item);
    }
  }
  /* To move zero to end
  1) nonZeroArray.concat(zeroArray)
  2) [...nonZeroArray, ...zeroArray]
 */
  return zeroArray.concat(nonZeroArray);
};

// driver code to run the function
const array = [1, 3, 0, 9, 8, 0, 0, 12];
const result = moveZeroToRight(array);
console.log(result);
