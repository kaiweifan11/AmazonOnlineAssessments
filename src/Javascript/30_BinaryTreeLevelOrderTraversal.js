/*
Given the root of a binary tree, return the level order traversal of its nodes' 
values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    
    const getLevel= ((root) =>{
        let arr = [];
        if(root.left == null && root.right == null){
            return;
        }  
        
        if(root.left){
            arr.push(root.left.val);
        }else{
            arr.push(null);
        }
        
        if(root.right){
            arr.push(root.right.val);
        }else{
            arr.push(null);
        }
        
        returnArray.push(arr);
        
        getLevel(root.left);
        getLevel(root.right);
    })
    
    const returnArray = [];
    if(root == null){
        return returnArray;
    }
    let rootVal = [root.val]
    returnArray.push(rootVal)
    getLevel(root);
    return returnArray;
};