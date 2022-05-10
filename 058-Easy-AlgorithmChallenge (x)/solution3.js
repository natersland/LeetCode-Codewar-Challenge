const lengthOfLastWord = (s) => {
  const filteredString = s.split(" ");
  let result = 0;
  let i = 0;
  while (i < filteredString.length) {
    if (filteredString[i].length) {
      result = filteredString[i].length;
    }
    i++;
  }
  return result;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
