let nums = [1,2,3,4,5];
let n = nums.length;
let temp = nums[n-1];

for (let i=n-2; i>=0; i--)
{
    nums[i+1]=nums[i];
}
nums[0]=temp;
console.log(nums);

// Time Complexity: O(n)
// Space Complexity: O(1)
// Reason: We are using a single variable to store the last element. The space complexity is O(1) because we are not using any extra space.
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [5, 1, 2, 3, 4]
// Explanation: The array is rotated by one position to the right.