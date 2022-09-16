/*
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a 
different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const hash = {};
    
    for(let word of strs){
        let sortedWord = word.split('').sort().join('');
        if(hash[sortedWord] == null){
            hash[sortedWord] = [];
        }
        hash[sortedWord].push(word);
        
    }
    
    const returnArray = [];
    
    Object.keys(hash).map((key)=>{
        returnArray.push(hash[key]);
    })
    
    return returnArray;
};