let nums = [1,0,2,0,3,0,4,0];

let n = nums.length;
let temp = [];

for (let i=0; i<n; i++){
    if(nums[i]!=0){
        temp.push(nums[i]);
    }
}
let tempsize = temp.length;
for(let i=0; i<tempsize; i++){
    nums[i]=temp[i];
}

for(let i=tempsize; i<n; i++){
    nums[i]=0;
}
console.log(nums);
 
// Time Complexity: O(n)
// Space Complexity: O(n)
// Reason: We are using a temporary array to store the non-zero elements. The space complexity is O(n) because we are using extra space.
// Example:
// Input: [1, 0, 2, 0, 3, 0, 4, 0]
// Output: [1, 2, 3, 4, 0, 0, 0, 0]
// Explanation: The array is moved to the end of the array.


// 2. optimal solution
let arr = [1,0,2,0,3,0,4,0];
let size = arr.length;
let j=-1;
for (let i=0; i<size; i++)
{
    if(arr[i]==0)
        j=i;
        break;
}

if (j==-1) return arr;    // as there are no zeros

for (let i=j+1; i<size; i++){
    if(arr[i]!=0)
    {
        // swap(arr[i],arr[j]);
        [arr[i], arr[j]] = [arr[j], arr[i]];
        j++;
    }
}

console.log(arr);

// Time Complexity: O(n)
// Space Complexity: O(1)
// Reason: We are using a single variable to store the index of the first zero. The space complexity is O(1) because we are not using any extra space.
// Example:
// Input: [1, 0, 2, 0, 3, 0, 4, 0]
// Output: [1, 2, 3, 4, 0, 0, 0, 0]
// Explanation: The array is moved to the end of the array.