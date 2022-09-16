/*
Very Hard
Given n non-negative integers representing an elevation map where the width of 
each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array 
[0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) 
are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
*/

/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    // answer from https://www.geeksforgeeks.org/trapping-rain-water/
    
    let rainwater = 0;
    let n = height.length;
    
    // except First and last in the array
    for(let i=1; i<n-1; i++){
        
        // Find maximum element on its left
        let left = height[i];
        for(let j=0; j<i; j++){
            left = Math.max(left, height[j])
        }
        
        // Find maximum element on its right
        let right = height[i];
        for(let j = i+1; j<n; j++){
            right = Math.max(right, height[j]);
        }
        
        rainwater += Math.min(left, right) -height[i];
    }
    
    return rainwater;
};