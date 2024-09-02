// quick sort the array of numbers or char
// Time complexity:- Best :- O(n log n)  average case:- O(n log n) worst case:- O(n log n)
// Space complexity:- Best case:-  O(N)

const mergeSort = (arr) => {
    const arrLength = arr.length;
    // base case
    if(arrLength <= 1){
        return arr;
    }

    const mid = Math.floor(arrLength/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arrLength);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const mergedArray = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            mergedArray.push(left.shift())
        }else{
            mergedArray.push(right.shift())
        }
    }

    return [...mergedArray, ...left, ...right];
}

// driver code run the function
const numbers = [23, 12, 44, 7, 5, 6, 0, 9];
const sortedArray = mergeSort(numbers);
console.log(sortedArray);
