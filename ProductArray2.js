// TIME: O(n), SPACE: O(1)
let nums = [-1, 1, 0, -3, 3];

let product = 1;

const output = [];

// calculating left part
for (let i = 0; i < nums.length; i++) {
  if (i === 0) {
    output.push(product);
  } else {
    product *= nums[i - 1];
    output.push(product);
  }
}
product = 1;
// calculating right part
for (let i = nums.length - 1; i >= 0; i--) {
  if (i === nums.length - 1) {
    output[i] *= product;
  } else {
    product *= nums[i + 1];
    output[i] *= product;
  }
}

console.log(output);
