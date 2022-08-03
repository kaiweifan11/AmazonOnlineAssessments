/*
You are given an array of k linked-lists lists, each linked-list is sorted in 
ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:
Input: lists = []
Output: []

Example 3:
Input: lists = [[]]
Output: []
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let returnList = lists[0];
    
    const addNodeAfter =((currNode, val)=>{
        let nextNode = currNode.next;
        let newNode = new ListNode(val, nextNode);
        currNode.next = newNode;
    });
    
    const addNodeBefore =((currNode, val)=>{
        return new ListNode(val, currNode);
    });
    
    for(let k=1; k<lists.length; k++){
        let cmpLinkedList = lists[k];
        
        if(cmpLinkedList == null) continue;
        if(returnList == null){
            returnList = cmpLinkedList;
            continue;
        }
        
        let cmpNode = cmpLinkedList;
        let currNode = returnList;
            
        while(cmpNode != null){
            if(currNode.next == null){
                addNodeAfter(currNode, cmpNode.val);
                cmpNode = cmpNode.next;
            }else if(currNode.next.val <= cmpNode.val) {
                currNode = currNode.next;
            }else if(currNode.val <= cmpNode.val){
                addNodeAfter(currNode, cmpNode.val);
                cmpNode = cmpNode.next;
            }else{
                // head is bigger than cmpNode
                returnList = addNodeBefore(currNode, cmpNode.val);
                currNode = returnList;
                cmpNode = cmpNode.next;
            }
        }
    }
    
    return returnList;
};