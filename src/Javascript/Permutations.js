/*
Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let n = nums.length;
    const returnArray = [];
    
    if(n == 1){
        returnArray.push(nums);
        return returnArray;
    }
    
    for(let i = 0; i<n; i++){
        // Rotate the array
        let rotatedArray = [...nums];
          // [1,2,3], [3,1,2], [2,3,1], [1,2,3]
        while(rotatedArray[0] != nums[i]){
            // Always start with the first digit to add
            rotatedArray.unshift(rotatedArray.pop());
        }
        
        for(let k=0; k<n-1; k++){
            let tempArray = [];
            tempArray.push(nums[i]);
            for(let j=0; j<n; j++ ){
               if(!tempArray.includes(rotatedArray[j])) {
                     tempArray.push(rotatedArray[j]);
                }
            }
            returnArray.push(tempArray);
            rotatedArray.unshift(rotatedArray.pop());
        }
    }
    
    return returnArray;
    
};