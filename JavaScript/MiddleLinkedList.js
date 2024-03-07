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
var middleNode = function(head) {
    if(head === null || head.next === null)
        return head;

    let middle = head;
    let final = head;

    while(final !== null && final.next !== null){
        final = final.next;
        final = final.next;
        middle = middle.next;
    }

    return middle;
};