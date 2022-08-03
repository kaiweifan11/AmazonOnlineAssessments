/*
https://leetcode.com/problems/rotate-image/
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    // adapted from original solution posted in
    // https://www.geeksforgeeks.org/inplace-rotate-square-matrix-by-90-degrees/
    // original solution was to swap anti-clockwise
    const changePosition = ((newX, newY, newVal)=>{
        matrix[newX][newY] = newVal;
    })
    
    const n = matrix.length;
    
    // Consider all squares one by one
    for(let x = 0; x< n / 2; x++){
        for(let y = x; y < n - x - 1; y++){
            // Store current cell in temp variable
            // rotate and repeat
            
            // Move values from top to right 
            let newX = y;
            let newY = n - 1 - x;
            let temp = matrix[newX][newY];
            let newVal = matrix[x][y];
            changePosition(newX, newY, newVal);
            
            // Move values from right to bottom
            newX = n - 1 - x;
            newY = n - 1 - y;
            newVal = temp;
            temp = matrix[newX][newY];
            changePosition(newX, newY, newVal);

            // Move values from bottom to left
            newX = n - 1 - y;
            newY = x;
            newVal = temp;
            temp = matrix[newX][newY];
            changePosition(newX, newY, newVal);

            // Move values from left to top
            newX = x;
            newY = y;
            newVal = temp;
            temp = matrix[newX][newY];
            changePosition(newX, newY, newVal);
        }
    }
};