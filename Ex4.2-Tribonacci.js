function tribonacci(signatureArr, n) {
  nElements = [];
  let numA, numB, numC;
  if (n === 0) return [];
  nElements = [...signatureArr];
  console.log(nElements);

  for (let index = 0; index <= n; index++) {
    nElements.push(
      nElements[index] + nElements[index + 1] + nElements[index + 2]
    );
  }

  return nElements;
}

console.log(tribonacci([0, 0, 1], 5));
console.log(tribonacci([0, 0, 1], 0));
console.log(tribonacci([0, 0, 1], 10));
console.log(tribonacci([0, 1, 1], 5));
console.log(tribonacci([0, 1, 1], 0));
console.log(tribonacci([0, 1, 1], 10));
console.log(tribonacci([1, 1, 1], 5));
console.log(tribonacci([1, 1, 1], 0));
console.log(tribonacci([1, 1, 1], 10));
