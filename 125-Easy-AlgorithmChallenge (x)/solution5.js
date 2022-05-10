const isPalindrome = (s) => {
  const filteredString = s.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let reverseString = "";
  for (let char in filteredString) {
    reverseString = filteredString[char] + reverseString;
  }
  return reverseString === filteredString ? true : false;
};

console.log(isPalindrome(" A man, a plan, a canal: Panama "));
