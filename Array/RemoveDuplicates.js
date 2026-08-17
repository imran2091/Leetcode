class Solution
{
    /**
     * Removes duplicates from an array
     * @param {number[]} nums - Array of numbers
     * @returns {number} - Length of the array after removing duplicates
     */
    removeDuplicates(nums){
        let n = nums.length;
        let i=0;
        for (let j=1; j<n; j++)
        {
            // If the current element is not equal to the previous element, then we add it to the array after the last unique element
            if(nums[j]!=nums[i])
            {
                nums[i+1]= nums[j];
                // Increment the index of the last unique element
                i++;
            }
        }
        return i+1;
    }
}

let nums = [1, 2, 2, 3, 4, 4, 5];
let solution = new Solution();
let result = solution.removeDuplicates(nums);
console.log(result);


// Time Complexity: O(n)
// Space Complexity: O(1)
// Reason: We are using two pointers i and j to traverse the array. The space complexity is O(1) because we are not using any extra space.
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: 5
// Explanation: The array after removing duplicates is [1, 2, 3, 4, 5]. The length of the array is 5.
// Example:
// Input: [1, 1, 2]
// Output: 2
// Explanation: The array after removing duplicates is [1, 2]. The length of the array is 2.