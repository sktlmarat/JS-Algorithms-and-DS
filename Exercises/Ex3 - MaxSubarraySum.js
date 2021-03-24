// Given an array of integers and a number, write a function 
// which finds the maximum sum of a subarray with the length of the number passed to the function. 
// O(n)

function maxSubarraySum(arr, sub){
    let max = 0;
    if (arr.length < sub) return null;
    for (const i of arr.keys()) {
        let sum = 0;
        for (let index = 0; index < sub; index++) {
            sum += arr[i + index];
        }
        if(sum > max) max = sum;
    }
    return max;
}