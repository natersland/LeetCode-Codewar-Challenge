//581. Shortest Unsorted Continuous Subarray
const findUnsortedSubarray = (nums) => {
  let sortedCount = 0;

  let lowestNumer = [0];
  let highestNumber = [0];

  // หา nums ที่มีค่าน้อยที่สุด
  let i = 0;
  while (i < nums.length) {
    if (lowestNumer[0] < nums[i]) {
      lowestNumer.splice(0, 1, nums[i]);
    }
    i++;
  }

  // หา nums ที่มีค่ามากที่สุด
  for (let digit of nums) {
    if (digit > highestNumber[0]) {
      highestNumber.splice(0, 1, digit);
    }
  }

  let result = nums.sort((a, b) => a - b);
  console.log(result);
  return sortedCount;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
