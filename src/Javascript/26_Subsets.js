/*
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    //Xolution from https://medium.com/nerd-for-tech/leetcode-subsets-2671aa0fb7a3
    
    function findSubset(array, subset) {
        result.push([...subset]);
        for(let i = 0; i < array.length; i++) {
            subset.push(array[i]);
            findSubset(array.slice(i + 1), subset);
            subset.pop();
        }
    }
    let result = [];
    findSubset(nums, []);
    return result;
};