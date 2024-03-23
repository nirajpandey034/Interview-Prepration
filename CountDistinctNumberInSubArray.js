// Count number for distinct numbers in subarrays of size k

const arr = [1, 2, 1, 3, 4, 2, 3];
const k = 4; // window size

const obj = {}; // to store intermidiate frequency of each window
const distinctsCount = []; // to store output
const countDistinct = (arr, distinctsCount, obj, k) => {
  // intially creating first window
  for (let i = 0; i < k; i++) {
    obj[arr[i]] ? (obj[arr[i]] += 1) : (obj[arr[i]] = 1);
  }
  distinctsCount.push(Object.keys(obj).length);

  // let operate on rest of the elements
  for (let i = k; i < arr.length; i++) {
    // delete the left most item if it has 1 occurence otherwise reduce occurence
    obj[arr[i - k]] === 1 ? delete obj[arr[i - k]] : (obj[arr[i - k]] -= 1);
    obj[arr[i]] ? (obj[arr[i]] += 1) : (obj[arr[i]] = 1);
    distinctsCount.push(Object.keys(obj).length);
  }
  console.log(
    `Count of distinct number in subarray of size ${k}:  ${distinctsCount}`
  );
};

countDistinct(arr, distinctsCount, obj, k);
