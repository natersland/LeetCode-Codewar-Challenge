const isPalindrome = (s) => {
  const filteredString = s.replace(/[^a-zA-Z]/g, "").toLowerCase();

  let reverseWord = "";
  for (let char in filteredString) {
    reverseWord = filteredString[char] + reverseWord;
  }

  return filteredString === reverseWord ? true : false;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
