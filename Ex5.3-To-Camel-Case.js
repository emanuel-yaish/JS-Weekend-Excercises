function toCamelCase(str) {
  const strWords = str.match(/\d+|[^\d_.-]+/g);
  for (let index = 1; index < strWords.length; index++) {
    strWords[index][0].toUpperCase();
  }
  return strWords.join("");
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
