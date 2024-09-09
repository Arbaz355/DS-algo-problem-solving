/* 
1) in a sorted array, if item is found return the index of item, if items is not found return -1
*/

/*
@prams {number[]} arr
@parms {number} target (target value to find)
*/

const exponentialSearch = (arr, target) => {
    // base case
    if(arr.length <= 0){
        return -1;
    }

    let i=1;
    while(i < arr.length && arr[i] < target){
        i *=2;
    }

    let startIndex = Math.floor(i/2);
    let endIndex = Math.min(i, arr.length - 1);

    //binary search
    while(startIndex <= endIndex){
        let midIndex = Math.floor((startIndex + endIndex)/2);

        if(target === arr[midIndex]){
            return midIndex;
        }
        else if(target > arr[midIndex]){
            startIndex = midIndex + 1;
        }
        else {
            endIndex = midIndex - 1;
        }
    }

    return -1;
}


// driver code to run the function
const numbers = [4, 9, 10, 45, 55, 56, 58, 70, 72, 74];
                //  i=1,
                // i *=2; -> 2
                // i *= 2 -> 4
                // i *=2 -> 8
                // [72, 74]
// 1) i < arr.length, 2) arr[i] < target
const indexOfItem = exponentialSearch(numbers, 58);
console.log(indexOfItem);