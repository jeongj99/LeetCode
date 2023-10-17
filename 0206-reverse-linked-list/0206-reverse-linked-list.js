/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prevNode = null
    let currentNode = head;
    
    while (currentNode) {
        const next = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = next;
    }
    
    return prevNode;
};