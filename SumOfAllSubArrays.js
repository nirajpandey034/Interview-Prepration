// sum of all subarrays of size k.
let arr = [1, -2, 3, -4, 5, 6];
let k = 2;

let output = [];

if (k > arr.length) console.log('Invalid inputs');
else {
  let sum = 0;
  // lets initiate first window
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  output.push(sum);

  // lets work on rest of items
  for (let i = k; i < arr.length; i++) {
    sum -= arr[i - k]; //remove left item
    sum += arr[i]; // include next item
    output.push(sum);
  }

  console.log(output);
}
