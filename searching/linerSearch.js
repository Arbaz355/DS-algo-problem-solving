// write a function to liner search in the array 
// return the item index if item is found
// return -1 if item not found

const linerSearch = (arr, target) => {
    // base case
    if(arr.length <= 0){
        return -1;
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }

    return -1;
}


// driver code to run the function
const numbers = [4, 9, 8, 45, 11];
const indexOfItem = linerSearch(numbers, 11);
console.log(indexOfItem);
