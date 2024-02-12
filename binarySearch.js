function BS() {
  let arr = [3, 4, 5, 6, 7, 8, 13, 346, 134135];

  let low = 0;
  let high = arr.length - 1;
  let mid = 0;
  let element = 5234;

  let found = false;

  while (low <= high) {
    mid = parseInt((low + high) / 2);
    if (arr[mid] === element) {
      found = true;
      // low = high + 1; // for surely breaking the loop (OPTIONAL)
      break;
    }
    if (arr[mid] > element) high = mid - 1;
    else low = mid + 1;
  }

  if (found) console.log('found at: ', mid + 1);
  else console.log('Not found');
}
BS();
