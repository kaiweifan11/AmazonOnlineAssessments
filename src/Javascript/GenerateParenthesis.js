/*
Given n pairs of parentheses, write a function to generate all combinations of 
well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    // Answer from https://duncan-mcardle.medium.com/leetcode-problem-23-generate-parentheses-javascript-f7264d798a1c
    
    const returnArray = [];
    
    const recursiveAdd = ((currentString, numOpenBrackets, numClosedBrackets, maximumPairs)=>{
        if(currentString.length == maximumPairs*2){
            returnArray.push(currentString);
            return 
        }
        
        if(numOpenBrackets < maximumPairs){
            recursiveAdd(
                currentString +'(',
                numOpenBrackets + 1,
                numClosedBrackets,
                maximumPairs
            )
        }
        
        if(numClosedBrackets < numOpenBrackets){
            recursiveAdd(
                currentString +')',
                numOpenBrackets,
                numClosedBrackets + 1,
                maximumPairs
            )
        }
    })
    
    
    recursiveAdd('', 0 , 0, n);
    return returnArray;
};