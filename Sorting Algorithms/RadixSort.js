function getDigit(num, i) {
    return Math.floor(Math.abs(num)/Math.pow(10, i)) % 10;
}

function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, digitCount(nums[i]))
    }
    return max;
}

// Radix Sort
function radixSort(nums) {
    let max = mostDigits(nums);
    for (let i = 0; i < max; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let j = 0; j < nums.length; j++) {
            digitBuckets[getDigit(nums[j], i)].push(nums[j]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
