// 415. Add Strings
const addStrings = (num1, num2) => {
  let result = "";
  let carry = 0;

  let i = num1.length - 1;
  let j = num2.length - 1;

  const numm1 = num1.charAt(i) - "0";
  const numm2 = num1[i] - "0";

  console.log(numm2 + numm2);

  while (i >= 0 || j >= 0 || carry > 0) {
    let degit1 = num1.charAt(i) - "0";
    let degit2 = num2.charAt(j) - "0";

    let sum = degit1 + degit2 + carry;
    result = `${sum % 10}${result}`;
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  return result;
};

console.log(addStrings("999", "999"));
