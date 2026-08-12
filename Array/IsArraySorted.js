let nums = [2,2,8,2,4,1];

let isSorted = true;

for (let i=1; i<nums.length; i++){
    if(nums[i]<nums[i-1]){
        isSorted=false;
        break;
    }
}
console.log(isSorted);

// Time Complexity: O(n)
// Space Complexity: O(1)
// Reason: We are using a single variable to store the result. The space complexity is O(1) because we are not using any extra space.
// Example:
// Input: [2, 2, 8, 2, 4, 1]
// Output: false
// Explanation: The array is not sorted.
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: true
// Explanation: The array is sorted.