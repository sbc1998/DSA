// LeetCode 209: Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/

//using brute force
function minSizeSubarray(arr, target) {
    let sizes = [];
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let sum = 0;
        for (let j = i; j < length; j++) {
            sum += arr[j];
            if (sum >= target) {
                sizes.push(j - i + 1);
                break;
            }
        }
    }

    return sizes.length ? Math.min(...sizes) : 0;
}

// Input
let arr = [2, 3, 1, 2, 4, 3];
let target = 7;

// Output
let result = minSizeSubarray(arr, target);
console.log(result); // 2