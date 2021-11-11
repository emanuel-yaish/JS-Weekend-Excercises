function findNextSquare(num) {
  if (!Number.isInteger(Math.sqrt(num))) return -1;

  return (Math.sqrt(num) + 1) * (Math.sqrt(num) + 1);
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
