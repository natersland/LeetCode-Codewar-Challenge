// 844. Backspace String Compare
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.
const backspaceCompare = (s, t) => {
  let sArray = [];
  let tArray = [];

  // check s
  let i = 0;
  while (i < s.length) {
    if (s[i] === "#") {
      sArray.pop();
    } else {
      sArray.push(s[i]);
    }
    i++;
  }

  // check t
  let j = 0;
  while (j < t.length) {
    if (t[j] === "#") {
      tArray.pop();
    } else {
      tArray.push(t[j]);
    }
    j++;
  }
  // compare s and t
  console.log(sArray);
  console.log(tArray);
  if (sArray.toString() === tArray.toString()) {
    return true;
  } else {
    return false;
  }
};

backspaceCompare("ab#c", "ad#c");
