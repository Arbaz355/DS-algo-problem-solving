// write a function to convert array to object

// methods 1 
const convertedObj = (arr) => Object.assign({}, arr)

// method 2
const convertedObj2 = (arr) => {
    let obj = {};
    for(let i=0; i<arr.length; i++){
        obj[i] = arr[i]
    }

    return obj;
}


// driver code 
const numbers = [0, 2, 4, 89, 90];
const result = convertedObj2(numbers);
console.log(result);