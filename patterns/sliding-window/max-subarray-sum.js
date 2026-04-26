function maxSum(arr, k) {
    let maximumSum= [];
    let n= arr.length;
    if(k===1) {
        return Math.max(...arr);
    }
    else if(k===0){ 
        return;
    }
    else {
        for(let i=0; i<=n-k; i++) {
            let sum=0;
            for(let j=0; j<k; j++) {
                sum= sum+arr[i+j];
            }
            maximumSum.push(sum);
        }
        return maximumSum;
    }
}

var arr= [1,2,3,4,5,6];
var k=3;
let subArray= maxSum(arr, k);
console.log(subArray);
console.log("Maximum sum is:", Math.max(...subArray));

//using sliding window
function maxSum(arr, k) {
    let maximumSum = [];
    let n = arr.length;

    if (k === 0) return [];
    if (k > n) return null;

    let sum = 0;

    // First window
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    maximumSum.push(sum);

    // Sliding window
    for (let j = k; j < n; j++) {
        sum = sum - arr[j - k] + arr[j];
        maximumSum.push(sum);
    }

    return maximumSum;
}

var arr = [1, 7, 3, 4, 5, 10];
let subArray = maxSum(arr, 3);

console.log(subArray);
console.log("Maximum sum is:", Math.max(...subArray));