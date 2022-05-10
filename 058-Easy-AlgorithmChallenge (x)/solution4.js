const lengthOfLastWord = (s) => {
  const stringtoArray = s.split(" ");
  const filteredSpace = stringtoArray.filter((char) => {
    return char !== "";
  });
  const result = filteredSpace[filteredSpace.length - 1].length;

  return result;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
