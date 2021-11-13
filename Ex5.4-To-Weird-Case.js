function toWeirdCase(str) {
  words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    letters = words[i].split("");
    for (let j = 0; j < letters.length; j++) {
      if (j % 2 === 0) letters[j] = letters[j].toUpperCase();
      else letters[j] = letters[j].toLowerCase();
    }
    words[i] = letters.join("");
  }
  str = words.join(" ");
  return str;
}

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));
