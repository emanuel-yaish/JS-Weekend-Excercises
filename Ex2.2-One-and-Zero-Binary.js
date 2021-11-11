function convertBinaryToInteger(arr) {
  let integerfromBinary = 0;
  for (
    let index = 0, pow = arr.length - 1;
    index < arr.length;
    index++, pow--
  ) {
    integerfromBinary += arr[index] * 2 ** pow;
  }

  return integerfromBinary;
}

console.log(convertBinaryToInteger([0, 0, 0, 1]));
console.log(convertBinaryToInteger([0, 0, 1, 0]));
console.log(convertBinaryToInteger([0, 1, 0, 1]));
console.log(convertBinaryToInteger([1, 0, 0, 1]));
console.log(convertBinaryToInteger([0, 0, 1, 0]));
console.log(convertBinaryToInteger([0, 1, 1, 0]));
console.log(convertBinaryToInteger([1, 1, 1, 1]));
console.log(convertBinaryToInteger([1, 0, 1, 1]));
