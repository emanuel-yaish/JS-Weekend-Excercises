function findUniq(arr) {
  let numA = arr[0],
    numB = arr[1],
    numC = arr[2];

  if (numA === numB && numA === numC)
    for (let index = 3; index < arr.length; index++) {
      if (arr[index] !== numA) return arr[index];
    }

  if (numA === numB) return numC;
  if (numA === numC) return numB;
  return numA;
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([100, 100, 100, 100, 100, 100, 100, 1]));
