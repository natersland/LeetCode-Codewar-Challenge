const lengthOfLastWord = (s) => {
  const wordToArray = s.split(" ");

  const filteredWord = wordToArray.filter((char) => {
    return char !== "";
  });
  const result = filteredWord[filteredWord.length - 1].length;
  
  return result;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
