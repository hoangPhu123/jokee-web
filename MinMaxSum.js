function quickSort(arr) {
  // If the array <= 1 element, return
  if (arr.length <= 1) return arr;

  // Let first element is pivot
  const pivot = arr[0];

  // Create 2 empty array to store left-less and right-greater
  const left = [];
  const right = [];

  // Loop
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  // Output sorted array by spread syntax
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [1, 3, 2, 5, 4];

const sortedArr = quickSort(arr);

const minSum = sortedArr
  .slice(0, arr.length - 1)
  .reduce((acc, sum) => acc + sum);

const maxSum = sortedArr.slice(1).reduce((acc, sum) => acc + sum);

console.log(quickSort(arr));
console.log("Min Sum & Max Sum:", minSum, maxSum);
