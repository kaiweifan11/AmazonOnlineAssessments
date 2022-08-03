/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    /*
        One way to optimise this is to use JSON {} and store the sorted 
        nums[i], nums[j], nums[k] as the key
        That way we won't need to check for duplicates
        
        Or ... if we use hashMap.putIfAbsent
        in Java
    */

    // check if any of the arrays are duplicates
    const isDuplicateExist = ((arrayNum, newArray)=>{
        if(arrayNum.length <= 0) return false;
        for(let i=0; i<arrayNum.length; i++){
            if(isDuplicate(arrayNum[i], newArray)){
                return true;
            }
        }
        return false;
    })
    
    const isDuplicate = ((arr1, arr2)=>{
        for(let i =0; i< arr1.length; i++){
            if(arr2.includes(arr1[i])){
                index = arr2.indexOf(arr1[i]);
                arr2.splice(index, 1);
            }
        }
        if(arr2.length == 0) return true;
        return false;
    })
    
    // Criteria
    const isFitCriteria = ((pos1, pos2, pos3, i, j, k)=>{
        return (pos1 != pos2 != pos3 && (i + j + k == 0));
    })
    
    const length = nums.length;
    const returnArray = [];
    for(let i =0; i<length; i++){
        for(let j = i+1; j< length; j++){
            for(let k = j+1; k<length; k++){
                if(isFitCriteria(i, j, k, nums[i], nums[j], nums[k])){
                    const tempArray = [nums[i], nums[j], nums[k]];
                    if(!isDuplicateExist(returnArray, tempArray)) returnArray.push(tempArray);
                }
            }
        }
    }
    
    return returnArray;
    
};