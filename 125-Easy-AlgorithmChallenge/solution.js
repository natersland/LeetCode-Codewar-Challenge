// 125. Valid Palindrome
const isPalindrome = (s) => {
  let filterString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reverseString = "";
  console.log(filterString);

  for (let char of filterString) {
    reverseString = char + reverseString;
  }

  return filterString === reverseString ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
