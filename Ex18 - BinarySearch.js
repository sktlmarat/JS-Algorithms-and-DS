// Binary Search algorithm

function binarySearch(arr, goal) {
    let start = 0, end = arr.length -1, middle = Math.floor((end + start)/2);
    while (arr[middle] !== goal && start <= end){
        if(arr[middle] > goal){
            end = middle - 1;
        }else if(arr[middle] < goal){
            start = middle + 1;
        }
        middle = Math.floor((end + start)/2);
    }
    return (arr[middle] === goal) ? middle : -1;
}

let str = 'Marat'
for (const [i, v] of str) {
    console.log(i,v);
}