// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
    let newArr = arr.map(word => word[0].toUpperCase() + word.slice(1));
    return newArr;
}