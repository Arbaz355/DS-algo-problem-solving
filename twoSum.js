// find the indices of the array element who's sum equal to target value
// if item not found return  -1 

// time complexity -> o(n2)
const twoSum = (arr, target) => {
    // base case
    if(arr.length <= 1) return -1;

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i, j];
            }
        }
    }

    return -1;
}

// two pointer approach (sorted array)
const twoSumWithTwoPinter = (arr, target) => {
    // base case
    if(arr.length <= 1){
        return -1;
    }
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;

    while(left < right){ 
        const sum = arr[left] + arr[right];
        if(sum === target){
            return [left, right];
        }
        else if(target > sum){
            left++;
        }
        else{
            right--;
        }
    }

    return -1;
}

// method 3
const twoSumWithMap = (arr, target) => {
    // base case
    if(arr.length <= 1){
        return -1;
    }

    let map = new Map();

    for(let i=0; i<arr.length; i++){
        const pair1 = arr[i];
        const pair2 = target - pair1;

        // checking for the other pair exits in the map
        if(map.has(pair2)){
          // map.get(pair2) -> getting the pair2 index
          // i -> pair1 index
          return [map.get(pair2), i];
        }
        map.set(arr[i], i)
    }

    return -1;
}

// method 4
const twoSumWithSet = (arr, target) => { 
    // base case
    if(arr.length <= 1){
        return -1;
    }
    let set = new Set();
    for(let i=0; i<arr.length; i++){
        const pair1 = arr[i];
        const pair2 = target - pair1;

        if(set.has(pair2)){
            return [arr.indexOf(pair2), i]
        }
        set.add(arr[i])
    }

    return set;
}


// diver code
const numbers = [1, 2, 3, 7, 12, 23];
//[1, 2, 3, 7, 12, 23]
const result = twoSumWithSet(numbers, 8);
// pair1 + pair2 = target
// target = 8, pair2 = target - pair1
console.log(result);