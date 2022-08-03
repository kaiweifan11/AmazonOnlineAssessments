/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing 
together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    
    let list1Node = list1;
    let list2Node = list2;
    let returnLinkedList = null;
    
    const addBehind = ((list, newNode) =>{
        let currNode = list;
        while(currNode.next != null){
            currNode = currNode.next;
        }
        currNode.next = newNode;
    });
    
    const addNode = ((val)=>{
        const newNode = new ListNode(val, null);
        if(returnLinkedList == null){
            returnLinkedList = newNode;
        }else{
            addBehind(returnLinkedList, newNode);
        }
    })
    
    while(list1 != null || list2!=null){
        if(list2!= null && list1 == null){
            addNode(list2.val);
            list2 = list2.next;
        }else if(list1!= null && list2 == null){
            addNode(list1.val);
            list2 = list1.next;     
        }else if(list2.val <= list1.val){
            addNode(list2.val);
            list2 = list2.next;
        }else{
            addNode(list1.val);
            list1 = list1.next;
        }
    }
    
    return returnLinkedList;
};