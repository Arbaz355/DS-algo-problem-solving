/* write a function to binary the search in the sorted array
 1) return the item index if item is found
 2) return -1 if item not found 
 Time complexity:- Worst case: O(log3N), Average case: Θ(log3N), Best case: Ω(1)
 */

const ternarySearch = (arr, target) => {
    // base case for empty array
    if(arr.length <= 0){
        return -1;
    }

    let startIndex = 0;
    let endIndex = arr.length - 1;
    
    while(startIndex <= endIndex){
        let midIndex1 = startIndex + Math.floor(endIndex - startIndex)/3 // 0 + Math.floor((9 - 0)/3) -> 3
        let midIndex2 = endIndex - Math.floor((endIndex - startIndex)/3) // 9 - Math.floor((9-0)/3) -> 9 - 3 -> 6

        if(target === arr[midIndex1]){
            return midIndex1;
        }
        else if(target === arr[midIndex2]){
            return midIndex2;
        }
        else if(target > arr[midIndex1]){
            startIndex = midIndex1 + 1;
        }
        else if(target < arr[midIndex2]){
            endIndex = midIndex2 - 1;
        }
        else {
            startIndex = midIndex1 + 1;
            endIndex = midIndex2 - 1;
        }
    }

    return -1;
};

// driver code to run the function
const numbers = [4, 8, 9, 11, 45, 55, 67, 82, 88, 87];
            //start       mid1        mid2         end
            // mid1 == target 
            // mid2 == target 
            // target > arr[mid1] -> start = mid1 + 1
            // target < arr[mid2] -> end = mid2 - 1  
            // start = mid1 + 1, end  = mid2 - 1
const target = 90;
const indexOfItem = ternarySearch(numbers, target);
console.log(indexOfItem);
