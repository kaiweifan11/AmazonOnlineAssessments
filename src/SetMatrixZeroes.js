/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and 
column to 0's.

You must do it in place.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    const locationsWithZeroes = [];
    const rowNum = matrix.length;
    const colNum = matrix[0].length;
    
    for(let i=0; i<rowNum; i++){
        for(let j =0; j<colNum; j++){
            if(matrix[i][j] == 0){
                locationsWithZeroes.push([i, j]);
            }
        }
    }
    
    for(let location of locationsWithZeroes){
        // columns
        for(let i = 0; i<colNum; i++){
            matrix[location[0]][i] = 0;
        }
        
        // rows
        for(let j=0; j<rowNum; j++){
            matrix[j][location[1]] = 0;
        }
    }
    
    return matrix;
};