/*
Hard
Given two strings s and t of lengths m and n respectively, return the minimum 
window substring of s such that every character in t (including duplicates) is 
included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.
A substring is a contiguous sequence of characters within the string.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    if(t.length == 1){
        if(s.includes(t)) return t
        else return "";
    }
    
    let minString = '';
    
    const getRecursiveSubstring = ((subString)=>{
        if(subString.length <1) return;
        
        let isSubString = true;
        let testString = subString;
        
        for(let i = 0; i<t.length; i++){
            if(!testString.includes(t.charAt(i))){
                isSubString = false;
            }else{
                testString = testString.substring(0, testString.indexOf(t.charAt(i))) + testString.substring(testString.indexOf(t.charAt(i)) +1, testString.length);
            }
        }
        
        if(isSubString){
            if(minString == '' || subString.length < minString.length) minString = subString;
        }
        
        subString = subString.substring(1, subString.length);
        getRecursiveSubstring(subString);
        
    })
    
    getRecursiveSubstring(s);
    return minString;
};