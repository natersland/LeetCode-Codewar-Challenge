const findSmallestInt = (args) => {
  let result = args[0];
  let i = 0;
  while (i < args.length) {
    if (args[i] < result) {
      result = args[i];
    }
    i++;
  }
  return result;
};

console.log(findSmallestInt([34, 15, 88, 2]));
