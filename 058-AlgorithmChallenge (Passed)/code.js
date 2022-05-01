// 58. Length of Last Word (Easy)
// https://leetcode.com/problems/length-of-last-word/
/* Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only. */
// -------------------------
// Solution 1: Use Filter
// -------------------------
let lengthOfLastWord = function (str) {
  const splitStr = str.split(" ");
  const newSplitStr = splitStr.filter((items) => {
    return items !== "";
  });
  console.log(newSplitStr);
  const strLength = newSplitStr[newSplitStr.length - 1].length;
  console.log(strLength);
};

lengthOfLastWord("   fly me   to   the moon  ");

// -------------------------
// Solution 2: With Loop
// -------------------------

const lengthOfLastWord2 = (str) => {
  const strArray = str.split(" ");
  let result = 0;

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length) {
      result = strArray[i].length;
    }
  }
  return result;
};

lengthOfLastWord2(" go  go bye     bye  world  ");
