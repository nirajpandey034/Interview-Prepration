//fixed size sliding window recall

let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];

let k = 4; //window size

let maxSum = 0;
let currentSum = 0;

if (arr.length < k) {
  console.log('Invalid inputs');
} else {
  // intially creating the window with k elements
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum; // consider first window sum is maximum
  for (let i = k; i < arr.length; i++) {
    // following 2 operations are there to maintain window size equal to k
    currentSum -= arr[i - k]; // removing the left most element
    currentSum += arr[i]; // insert new element from right

    if (currentSum > maxSum) maxSum = currentSum;
  }
  console.log('Maximum Sum is: ' + maxSum + ' of Subarray of length: ' + k);
}
