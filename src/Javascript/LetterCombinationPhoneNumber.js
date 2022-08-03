/*
Hard
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use 
the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    const keyPad = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
   
    let queue = [''];
    let s = '';
    
    const returnArray = [];
    
    while(queue.length>0){
        s = queue.shift();
        
        if(s.length == digits.length){
            returnArray.push(s);
        }else{
            let index = parseInt(digits.charAt(s.length));
            const chars = keyPad[index];
            
            // for every char in the keypad eg. 'def' push into queue
            for(let i=0; i<chars.length; i++){
                queue.push(s+chars[i]);
            }
        }
    }
    
    return returnArray;
    
};