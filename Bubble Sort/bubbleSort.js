function buubleSort(arr) {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  }
  return arr;
}

let arr = [5, 2, 1, 8, 10, 23, 9, 14, 100, 80, 3, 75, 0];
buubleSort(arr);
