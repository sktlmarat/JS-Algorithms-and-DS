//  function which accepts an array and a value, 
// and returns the index at which the value exists. 
// If the value does not exist in the array, return -1.

function linearSearch(arr, goal) {
    for (const index of arr.keys()) {
        if (arr[index] === goal) return index;
    }
    return -1;
}