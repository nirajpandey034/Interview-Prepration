// Sum of minimum and maximum elements of all subarrays of size k.
// input array and window size
/* const arr = [1, 2, 3, 1, 4, 5, 2, 3, 6]; */
const arr = [1, 2, 3, 4, 5];
const k = 3;
/* const k = 3; */

const minmaxArr = [];
let totalSum = 0;

const getMaxMin = (start, end) => {
  let obj = {
    min: Number.MAX_VALUE,
    max: Number.MIN_VALUE,
  };
  for (let i = start; i <= end; i++) {
    if (arr[i] < obj.min) obj.min = arr[i];
    if (arr[i] > obj.max) obj.max = arr[i];
  }
  return obj;
};
const checkMinMax = (arr, start, end, kickedOutItemIndex) => {
  // processing first window
  if (minmaxArr.length === 0) {
    minmaxArr.push(getMaxMin(start, end));
  } else {
    // here we are processing rest of the items
    let obj = {
      min: Number.MAX_VALUE,
      max: Number.MIN_VALUE,
    };
    const lastSubArrayObj = minmaxArr[minmaxArr.length - 1];

    // if any of the item that is removed while sliding window, is max or min
    if (
      kickedOutItemIndex >= 0 &&
      (lastSubArrayObj.max === arr[kickedOutItemIndex] ||
        lastSubArrayObj.min === arr[kickedOutItemIndex])
    ) {
      minmaxArr.push(getMaxMin(start, end));
    } else {
      //check if new element is greater then previous subarrays max
      obj.max =
        arr[end] >= lastSubArrayObj.max ? arr[end] : lastSubArrayObj.max;
      obj.min =
        arr[end] <= lastSubArrayObj.min ? arr[end] : lastSubArrayObj.min;
      minmaxArr.push(obj);
    }
  }
};

const sumMinMax = (arr, k) => {
  let start = 0;
  let end = k - 1;

  while (end < arr.length) {
    checkMinMax(arr, start, end, start - 1);
    start += 1;
    end += 1;
  }
};
sumMinMax(arr, k);
for (let i = 0; i < minmaxArr.length; i++) {
  totalSum += minmaxArr[i].max + minmaxArr[i].min;
}
console.log(
  `Total Sum of All min & max in Subarrays of size ${k} is: ${totalSum}`
);
