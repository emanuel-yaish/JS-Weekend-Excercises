function maskify(str) {
  substringToMask = str.substring(0, str.length - 4);

  const mask = "#".repeat(substringToMask.length);

  return mask + str.substring(str.length - 4);
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
