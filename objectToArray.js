// write a methods to convert the object to array

// method 1
const convertedArray = (obj) => {
  // Object.keys(obj) -> returns the array of keys
  // Object.values(obj) -> returns the values of values
  // Object.entries(obj) -> returns the key values subarray in array
};

// method 2
const convertedArray2 = (obj) => {
  const arr = [];

  for (let key in obj) {
    arr.push([key, obj[key]]);
  }

  return arr;
  // return Object.keys(obj).map((key) => [key, obj[key]]);
};

// driver code
const personData = {
  name: "Arbaz",
  city: "Noida",
  country: "india",
  age: 25,
};
const result = convertedArray2(personData);
console.log(result);
