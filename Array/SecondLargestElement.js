class Solution {
    /**
     * Finds the second largest element in an array
     */
    secondLargestElement(nums) {
        // Handle edge cases
        if (!nums || nums.length < 2) {
            return -1;
        }
        
        let largest = nums[0];
        let secondlargest = -1;
        
        for (let i = 1; i < nums.length; i++) {
            // If the current element is greater than the largest, then the second largest is the largest and the largest is the current element
            if (nums[i] > largest) {
                secondlargest = largest;
                largest = nums[i];
            }
            // If the current element is less than the largest and greater than the second largest, then the second largest is the current element
            else if (nums[i] < largest && nums[i] > secondlargest) {
                secondlargest = nums[i];
            }
        }
        
        return secondlargest;
    }
}

// Example usage
const solution = new Solution();

// Test case 1: Normal array
const nums1 = [10, 5, 8, 20, 15];
console.log(solution.secondLargestElement(nums1)); // Output: 15

// Test case 2: Array with duplicates
const nums2 = [10, 10, 5, 8];
console.log(solution.secondLargestElement(nums2)); // Output: 8