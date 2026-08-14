class Solution{
    linearSearch(nums, target){
        let n = nums.length;
        for (let i=0; i<n; i++){
            if(nums[i]==target)
            {
                return i;
            }
        }
        return -1;
        }
}

let nums = [1,2,3,4,5];
let target = 3;
let solution = new Solution();
console.log(solution.linearSearch(nums, target));

// Time Complexity: O(n)
// Space Complexity: O(1)
// Reason: We are using a single variable to store the index of the target element. The space complexity is O(1) because we are not using any extra space.
// Example:
// Input: [1, 2, 3, 4, 5], 3
// Output: 2
// Explanation: The target element is 3 and it is present at index 2.