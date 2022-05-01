// 1662. Check If Two String Arrays are Equivalent

/* Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string. */

const arrayStringsAreEqual = (word1, word2) => {
  let word1String = "";
  let word2String = "";

  // join array of word1
  let i = 0;
  while (i < word1.length) {
    word1String += word1[i];
    i++;
  }

  // join array of word2
  let j = 0;
  while (j < word2.length) {
    word2String += word2[j];
    j++;
  }
  // compare word1 & word2
  if (word1String === word2String) {
    return true;
  } else {
    return false;
  }
};

arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);
