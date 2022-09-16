/*
Given an array nums with n objects colored red, white, or blue, sort them in-place 
so that objects of the same color are adjacent, with the colors in the order red, 
white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, 
respectively.

You must solve this problem without using the library's sort function.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    // bubble sort
    const swap = ((arr, i, j)=>{
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr;
    })
    
    for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            if(nums[j] < nums[i]){
                swap(nums, i, j);
            }
        }
    }
    
    return nums;
};