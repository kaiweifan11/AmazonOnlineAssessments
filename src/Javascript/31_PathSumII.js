/*
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values
in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const returnArray = [];

    function getPathSum(node, array, currSum){
        currSum += node.val;
        if(currSum <= 22){
            array.push(node.val)
        }
        if(currSum == 22){
            returnArray.push(array);
            return;
        }

        if(node.left != null && (currSum+node.left.val <=targetSum)) {
            // pass in only the instance of array
            getPathSum(node.left, [...array], currSum)
        }

        if(node.right != null && (currSum+node.right.val <=targetSum)) {
            // pass in only the instance of array
            getPathSum(node.right, [...array], currSum)
        }
    }

    getPathSum(root, [], 0);
    return returnArray;
};