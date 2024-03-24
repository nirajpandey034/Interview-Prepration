// TIME: O(n), SPACE: O(n)

let nums = [1, 2, 3, 4];

let l = [];
let r = [];

const output = [];

// building left part
for (let i = 0; i < nums.length; i++) {
  if (i === 0) {
    l.push(1);
  } else {
    l.push(l[l.length - 1] * nums[i - 1]);
  }
}
// building right part
for (let i = nums.length - 1; i >= 0; i--) {
  if (i === nums.length - 1) {
    r.push(1);
  } else {
    r.push(r[r.length - 1] * nums[i + 1]);
  }
}

r = r.reverse();

for (let i = 0; i < l.length; i++) {
  output.push(l[i] * r[i]);
}

console.log(output);
