/*
Given a positive integer n, generate an n x n matrix filled with 
elements from 1 to n2 in spiral order.

Example 1:
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:
Input: n = 1
Output: [[1]]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    // First setup the matrix
    let matrix = [];
    for(let i=0; i<n; i++){
        matrix.push([]);
    }
    let counter = 1;
    
    let rowIndex = 0;
    let rowNum = n;
    let colIndex = 0;
    let colNum = n;
    
    while(rowIndex < rowNum && colIndex< colNum){
        for(let i= colIndex; i<colNum; i++){
            matrix[rowIndex][i] = counter++;
        }
        rowIndex++;

        for(let j= rowIndex; j<rowNum; j++){
            matrix[j][colNum-1] = counter++;
        }
        colNum--;

        for(let k= colNum-1; k>=colIndex; k--){
            matrix[rowNum-1][k] = counter++;
        }
        rowNum--;

        for(let l=rowNum-1; l>=rowIndex; l--){
             matrix[l][colIndex] = counter++;
        }
        colIndex++;
    }
    
    return matrix;
};