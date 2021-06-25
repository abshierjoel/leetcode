const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const ans = target - nums[i]; //?

    for (let j = 0; j < nums.length; j++) {
      if (i == j) break;
      if (nums[j] == ans) return [j, i];
    }
  }
};

export default twoSum;
