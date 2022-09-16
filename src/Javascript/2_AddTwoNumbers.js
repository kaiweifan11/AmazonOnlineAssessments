/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    const reverse= ((linkedList)=>{
        let currNode = linkedList;
        let prevNode = null;
        
        while(currNode){
            let tempNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = tempNode;
        }
        return prevNode;
    });
    
    const linkedListToInteger = ((linkedList) =>{
        let string = '';
        while(linkedList){
            string += linkedList.val;
            linkedList = linkedList.next;
        }
        return parseInt(string)
    });
    
    const integerToLinkedList = ((integer) =>{
        let string = integer.toString();
        const node1 = new ListNode(parseInt(string.charAt(0)), null);
        let currNode = node1;
        string = string.substring(1);
        
         while(string.length>0){
            const nextNode = new ListNode(parseInt(string.charAt(0)), null);
            currNode.next = nextNode;
            currNode = nextNode;
            string = string.substring(1);
        }
        
        return node1;
    })
    
    
    const reversedL1 = reverse(l1);
    const reversedL2 = reverse(l2);
    
    const L1num = linkedListToInteger(reversedL1);
    const L2num = linkedListToInteger(reversedL2);
    const total = L1num + L2num;
    
    return reverse(integerToLinkedList(total));
};