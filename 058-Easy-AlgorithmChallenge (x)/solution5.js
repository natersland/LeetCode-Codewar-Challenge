/* const lengthOfLastWord = (s) => {
  const stringfToArray = s.split(" ");
  let filteredString = "";
  let = result = 0;
  let i = 0;
  while (i < stringfToArray.length) {
    if (stringfToArray[i].length) {
      result = stringfToArray[i].length;
    }
    i++;
  }

  return result;
}; */
const lengthOfLastWord = (s) => {
  const stringfToArray = s.split(" ");
  const filteredString = stringfToArray.filter((word) => {
    return word !== "";
  });

  const result = filteredString[filteredString.length - 1].length;
  return result;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
