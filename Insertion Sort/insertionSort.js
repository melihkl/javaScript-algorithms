function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let x = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > x) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = x;
  }
  return arr;
}

let arr = [5, 2, 1, 8, 10, 23, 9, 14, 100, 80, 3, 75, 0];
console.log(insertionSort(arr));
