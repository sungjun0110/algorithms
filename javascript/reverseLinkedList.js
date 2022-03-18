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
    let current = head;
    let next;
    head = null;
    
    while (current) {
        next = current.next;
        current.next = head;
        head = current;
        current = next;
    }
    
    return head;
};