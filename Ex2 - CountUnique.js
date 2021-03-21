// Implement a function which accepts a sorted array, 
// and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.
// O(n)

function countUniqueValues(sorted){
    let counter = 0;
    if (sorted.length === 1) return 1;
    for (const i of sorted.keys()) {
        if (sorted[i] !== sorted[i+1]) counter += 1;
    }
    return counter;
}
