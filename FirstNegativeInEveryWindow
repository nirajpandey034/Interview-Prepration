// first negative integer in every window of size k
const arr = [48, 974, 5, -59, -451];
const k = 3;

const output = [];
const queue = [];

// get negative from first window / initiate window
for (let i = 0; i < k; i++) {
  if (arr[i] < 0) {
    queue.push(arr[i]);
  }
}
output.push(queue[0] || 0);
// lets operate on rest of the elements
for (let i = k; i < arr.length; i++) {
  // if item to be removed from left side, and its the first negative number
  if (arr[i - k] === queue[0]) queue.shift(); // shift method is only used for achieving queue property (pop from front) using array.

  // if the number is negative push it to the queue
  if (arr[i] < 0) queue.push(arr[i]);

  // push to the output when queue has front element present
  if (queue.length > 0) {
    output.push(queue[0]);
  } else output.push(0);
}

console.log(output);
