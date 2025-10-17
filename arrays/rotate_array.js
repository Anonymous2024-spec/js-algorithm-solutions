var rotate = function (nums, k) {
  k = k % nums.length;
  if (k === 0) return; // no rotation needed

  let rotatedPart = nums.slice(-k);
  let remainingPart = nums.slice(0, nums.length - k);

  nums.length = 0;
  nums.push(...rotatedPart, ...remainingPart);
};
