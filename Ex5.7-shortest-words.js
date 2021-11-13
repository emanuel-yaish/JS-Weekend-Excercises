function shortestWord(str) {
  words = str.split(" ");
  shortestWordLenght = words[0].length;

  for (const word of words)
    if (word.length < shortestWordLenght) shortestWordLenght = word.length;

  return shortestWordLenght;
}

console.log(
  shortestWord("this is a example of function that return the shortest word!")
);
console.log(
  shortestWord(
    "this is another example of function that return the shortest word!"
  )
);
console.log(shortestWord("test"));
console.log(shortestWord("another test"));
