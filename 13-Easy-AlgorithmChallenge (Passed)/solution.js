// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

const romanToInt = (s) => {
  let result = 0;
  const romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let i = 0;
  while (i < s.length) {
    let concatLetter = s[i] + s[i + 1];
    if (
      concatLetter === "IV" ||
      concatLetter === "IX" ||
      concatLetter === "XL" ||
      concatLetter === "XC" ||
      concatLetter === "CD" ||
      concatLetter === "CM"
    ) {
      result += romanNumber[concatLetter];
      i++;
    } else {
      result += romanNumber[s[i]];
    }
    i++;
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));
