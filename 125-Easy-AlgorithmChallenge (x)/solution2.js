// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

const isPalindrome = (s) => {
  const filteredString = s.replace(/[^a-zA-Z]/g, "").toLowerCase();
  console.log(filteredString);
  let reverseString = "";

  for (let char in filteredString) {
    reverseString = filteredString[char] + reverseString;
  }

  return filteredString === reverseString ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
