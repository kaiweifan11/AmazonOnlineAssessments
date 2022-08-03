/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];
    
    const isOpenBracket =((c)=>{
        return (c == '(' || c=='{' || c=='[')
    })
    
    for(let i=0; i<s.length; i++){
        if(isOpenBracket(s[i])){
            stack.push(s[i])
        }else{
            const lastChar = stack.pop();
            switch(lastChar){
                case '(':
                    if(s[i] != ')') return false;
                case '{':
                    if(s[i] != '}') return false;
                case '[':
                    if(s[i] != ']') return false;
                default:
                    return false;
            }
        }
    }
    
    return true;
};