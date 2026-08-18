let arr1 = [1,2,3,3,4,5];
let arr2 = [1,2,3,6];

let arrsize1 = arr1.length;
let arrsize2 = arr2.length;

// using set to store the union of the two arrays
const st = new Set();
// adding elements of arr1 to the set
for (let i=0; i<arrsize1; i++)
{
    st.add(arr1[i]);    // add is method of set to add elements to the set
}
// adding elements of arr2 to the set
for (let i=0; i<arrsize2; i++)
{
    st.add(arr2[i]);
}
// converting the set to an array push the elements of the set to the array

let temp = [];   // extra space to store the union of the two arrays
for (let it of st)
{
    temp.push(it);
}
console.log(temp);

// Time Complexity: O(n+m)
// Space Complexity: O(n+m)
// Reason: We are using a set to store the union of the two arrays. The space complexity is O(n+m) because we are using extra space.
// Example:
// Input: [1, 2, 3, 4, 5], [1, 2, 3, 6]
// Output: [1, 2, 3, 4, 5, 6]

// 2. optimal solution
let a1 =[1,2,3,3,4,5];
let a2 =[1,2,3,6];

let a1size = a1.length;
let a2size = a2.length;

let i = 0;
let j = 0;
let unionArray = [];

// 1. Compare elements side-by-side
while (i < a1size && j < a2size) {
    if (a1[i] <= a2[j]) {
        if (unionArray.length == 0 || unionArray[unionArray.length - 1] != a1[i]) {
            unionArray.push(a1[i]);
        }
        i++;
    } else {
        if (unionArray.length == 0 || unionArray[unionArray.length - 1] != a2[j]) {
            unionArray.push(a2[j]);
        }
        j++;
    }
} // <-- Main loop ends here

// 2. Add left-over elements from a1 (Moved outside)
while (i < a1size) {
    if (unionArray.length == 0 || unionArray[unionArray.length - 1] != a1[i]) {
        unionArray.push(a1[i]);
    }
    i++;
}

// 3. Add left-over elements from a2 (Moved outside)
while (j < a2size) {
    if (unionArray.length == 0 || unionArray[unionArray.length - 1] != a2[j]) {
        unionArray.push(a2[j]);
    }
    j++;
}

console.log(unionArray); 

// Time Complexity: O(n+m)
// Space Complexity: O(1)
// Reason: We are using a single variable to store the union of the two arrays. The space complexity is O(1) because we are not using any extra space.
// Example:
// Input: [1, 2, 3, 4, 5], [1, 2, 3, 6]
// Output: [1, 2, 3, 4, 5, 6]
