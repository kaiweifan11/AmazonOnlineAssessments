/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);
 
Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    let isGoingDown = true;
    let rowCount = 0;
    let columnCount = 0;
    let twoDimensionArray = [];
    
    // setup a 2d array
    for(let i=0; i< numRows; i++){
        twoDimensionArray.push([]);
    }
    
    for(let stringIndex=0; stringIndex<s.length; stringIndex++){
        if(rowCount == numRows){
            isGoingDown = !isGoingDown;
            columnCount++;
            rowCount = numRows - 2;
        }else if(rowCount < 1 && columnCount > 0){
            isGoingDown = !isGoingDown;
            rowCount = 0;
        }
        
        twoDimensionArray[rowCount][columnCount] = s[stringIndex];
        
        if(isGoingDown){
            console.log('isGoingDown')
            rowCount++;
        }else{
            console.log('notGoingDown')
            rowCount--;
            columnCount++;
        }
    }
    
    let returnString = '';
    for(let j = 0; j< numRows; j++){
        returnString = returnString += twoDimensionArray[j].join('');
    }
    
    return returnString;
};