/*Given a string s, return the longest palindromic substring in s.
Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    const length = s.length;
    // one char is also a palindrome
    let maxLength = 1;
    let start = 0;
    
    for(let i =0; i<length; i++){
        for(let j =i; j<length; j++){
            let isPalindrome = true;
            
            // Check if this is a Palindrome
            for(k=0; k < (j-i +1)/2; k++){
                if (s[i + k] != s[j - k]) isPalindrome = false;
            }
            
            if (isPalindrome && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }
    
    return s.substring(start, start + maxLength)
};