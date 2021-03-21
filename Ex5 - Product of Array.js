// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    if(arr.length === 0) return 1;
    let res = arr[0];
    arr.shift();
    return res * productOfArray(arr); 
}