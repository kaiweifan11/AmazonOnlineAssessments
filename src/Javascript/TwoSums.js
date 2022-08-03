/*
Given a string containing digits from 2-9 inclusive, return all possible 
letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    const returnArray = [];
    for(let i = 0; i< nums.length-1; i++){
        if(nums[i]> target) continue;
        for(let j = 0; j<nums.length; j++){
            if(nums[j]> target || j == i) continue;
            else if(nums[i] + nums[j] == target){
                returnArray.push(i);
                returnArray.push(j);
                return returnArray;
            }
        }
    }
};