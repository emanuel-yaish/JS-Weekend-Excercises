// Your task is to create a function that does four basic .
function basicOp(operation, num1, num2) {
  switch (true) {
    case operation === "+":
      return num1 + num2;
    case operation === "-":
      return num1 - num2;
    case operation === "*":
      return num1 * num2;
    case operation === "/":
      return num1 / num2;

    default:
      return "not valid opearition";
  }
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
