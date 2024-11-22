// return true if array is sorted else return false 

const isArraySorted = arr => {
    // base case
    if(arr.length <= 1){
        return true;
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i+1] < arr[i]){
            return false;
        }
    }

    return true;
}

// driver code
const marks = [30, 40, 50, 55, 60];
const result = isArraySorted(marks);
console.log(result);