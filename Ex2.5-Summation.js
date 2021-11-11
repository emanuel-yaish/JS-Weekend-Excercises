function summation(num) {
  let sum = 0;
  for (let index = 1; index <= num; index++) {
    sum += index;
  }
  return sum;
}

console.log(summation(2));
console.log(summation(8));
console.log(summation(5));
console.log(summation(4));
