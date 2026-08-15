let nums = [10, 5, 8, 20, 15];

let largest = nums[0];

for (let i=1; i<nums.length; i++){
    if(nums[i] > largest){
        largest = nums[i];
    }
}

console.log(largest);

// Time Complexity: O(n)
// Space Complexity: O(1)
// Reason: We are using a single variable to store the largest element. The space complexity is O(1) because we are not using any extra space.
// Example:
// Input: [10, 5, 8, 20, 15]
// Output: 20
// Explanation: The largest element is 20.
// Example:
// Input: [10, 10, 5, 8]
// Output: 10
// Explanation: The largest element is 10.