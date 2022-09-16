/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const fullTree= [];

    const getColumn = (r, c) =>{
        if(r <= 0 || c <= 0 || r == c) return 1;
        return fullTree[r-1][c-1] + fullTree[r-1][c]
    }

    for(let i=0; i<=rowIndex; i++){
        const row = [];
        for(let j = 0; j<=i; j++){
            row.push(getColumn(i, j));
        }
        fullTree.push(row);
    }

    return fullTree[rowIndex];

};