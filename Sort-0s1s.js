const arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];

for (let i = 0, j = arr.length - 1; i <= j; ) {
  if ((arr[i] === 1) & (arr[j] === 0)) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  } else if (arr[i] === 0 && arr[j] === 1) {
    i++;
    j--;
  } else if (arr[i] === 0 && arr[j] === 0) {
    i++;
  } else if (arr[i] === 1 && arr[j] === 1) {
    j--;
  } else {
    i++;
    j--;
  }
}

console.log(arr);
