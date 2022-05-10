// 136. Single Number
// https://leetcode.com/problems/single-number/
const singleNumber = (nums) => {
  let i = 0;
  let result = null;
  while (i < nums.length) {
    let j = 0;
    while (j < nums.length) {
      if (nums[i] !== nums[j]) {
        result = nums[i];
        console.log(result);
      }
      j++;
    }
    i++;
  }
  return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
