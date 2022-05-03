// 905. Sort Array By Parity
const sortArrayByParity = (nums) => {
  let result = [];

  let i = 0;
  while (i < nums.length) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
    i++;
  }

  let j = 0;
  while (j < nums.length) {
    if (nums[j] % 2 !== 0) {
      result.push(nums[j]);
    }
    j++;
  }

  return result;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
