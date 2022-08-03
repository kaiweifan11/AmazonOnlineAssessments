/*
You are given an m x n integer array grid. There is a robot initially located 
at the top-left corner (i.e., grid[0][0]). The robot tries to move to the 
bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down 
or right at any point in time.
An obstacle and space are marked as 1 or 0 respectively in grid. A path that the 
robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the 
bottom-right corner.

The testcases are generated so that the answer will be less than or equal 
to 2 * 109.

Example 1:
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

Example 2:
Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    // answer from https://www.geeksforgeeks.org/unique-paths-in-a-grid-with-obstacles/
    
    const pathHelper = ((posX, posY, rowNum, colNum, obstacleGrid)=>{
        if(posX == rowNum || posY == colNum){
            return 0;
        }
        
        if(obstacleGrid[posX][posY] == 1){
            return 0;
        }
        
        // Reach destination
        if(posX == rowNum-1 && posY == colNum -1){
            return 1;
        }
        
        return pathHelper(posX+1, posY, rowNum, colNum, obstacleGrid) + pathHelper(posX, posY+1, rowNum, colNum, obstacleGrid)
    });
    
    const rowNum = obstacleGrid.length;
    const colNum = obstacleGrid[0].length;
    
    return pathHelper(0, 0, rowNum, colNum, obstacleGrid)
    
};