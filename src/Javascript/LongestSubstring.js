/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const length = s.length;
    let max = 0;
    
    const isRepeated = ((string, end)=>{
        const array = [];
        for(let i = 0; i<end; i++){
            const ch = string.charAt(i);
            if(array.includes(ch)){
                return true;
            }else{
                array.push(ch);
            }
        }
        return false
    })
    
    for(let i = 0; i<length; i++){
        for(let j = i; j<length; j++){
            const tempString = s.substring(i, j)
            if(i!=j && !isRepeated(tempString, j)){
               max = Math.max(max, j-i) 
            }
        }
    }
    
    return max;
};