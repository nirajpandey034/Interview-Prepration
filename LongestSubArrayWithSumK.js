// Longest sub-array having sum k
let arr = [10, 5, 2, 7, 1, 9];
let k = 15;
let n = arr.length;

let output = [];
let sum = 0;

let startIndex = 0;
let tempArray = [];

for (let i = 0; i < n; i++) {
  if (sum < k) {
    sum += arr[i];
    tempArray.push(arr[i]);
  }
  if (sum >= k) {
    if (tempArray.length > output.length && sum === k) output = [...tempArray];
    sum -= arr[startIndex];
    tempArray.splice(startIndex, 1);
    startIndex++;
  }
}
console.log(output);

// NOTE: This solution(sliding window), only works on positive number
