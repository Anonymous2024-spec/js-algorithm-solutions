// Input array (must be sorted for this algorithm to work)
let nums = [1, 1, 2];

// Function to remove duplicates in-place from a sorted array
var removeDuplicates = function (nums) {
  // If the array is empty, there are no unique elements
  if (nums.length === 0) return 0;

  {
    // 'i' tracks the position of the last unique element found
    let i = 0;

    // Start loop from the second element
    // 'j' scans through the array to find new unique values
    for (let j = 1; j < nums.length; j++) {
      // If the current element (nums[j]) is different from the last unique one (nums[i]),
      // it means we've found a new unique element
      if (nums[j] !== nums[i]) {
        // Move 'i' forward to the next position
        i++;
        // Copy the unique element to position 'i'
        nums[i] = nums[j];
      }
    }
  }

  // Since 'i' is an index (starting from 0), the total number of unique elements is (i + 1)
  return i + 1;
};

// Call the function and store the number of unique elements in 'k'
let k = removeDuplicates(nums);

// Output the count of unique elements
console.log(k); // Expected output: 2

// Output the unique part of the array
// sl
