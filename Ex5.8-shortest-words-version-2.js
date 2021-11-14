function longestWord(str) {
  words = str.split(" ");
  longestWordLenght = words[0].length;
  const longestWords = [];

  for (const word of words)
    if (longestWordLenght < word.length) longestWordLenght = word.length;

  for (const word of words)
    if (longestWordLenght === word.length) longestWords.push(word);

  return longestWords;
}

console.log(
  longestWord("this is a example of function that return the shortest word!")
);
console.log(
  longestWord(
    "this is another example of function that return the shortest word!"
  )
);
console.log(longestWord("test"));
console.log(longestWord("another test"));
console.log(longestWord("test test test test"));
