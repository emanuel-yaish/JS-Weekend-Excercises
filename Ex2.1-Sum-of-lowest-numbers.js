function sumOfLowestNumbers(arr) {
  let minA = arr[0];
  let minB = arr[1];

  for (index = 2; index < arr.length; index++) {
    if (arr[index] < minA && arr[index] < minB)
      if (minA < minB) {
        minB = arr[index];
      } else {
        minA = arr[index];
      }
    else if (arr[index] < minA) {
      minA = arr[index];
    } else if (arr[index] < minB) {
      minB = arr[index];
    }
  }
  return minA + minB;
}

console.log(sumOfLowestNumbers([19, 5, 42, 2, 77]));
console.log(sumOfLowestNumbers([10, 343445353, 3453445, 3453545353453]));
console.log(sumOfLowestNumbers([1, 1, 1, 1, 1]));
console.log(sumOfLowestNumbers([5, 4, 3, 2, 1]));
