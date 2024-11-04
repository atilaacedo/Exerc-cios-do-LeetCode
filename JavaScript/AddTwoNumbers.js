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

    let ans = new ListNode();
    let n1 = [];
    let n2 = [];

     while (l1 !== null) {
        n1.push(l1.val);
        l1 = l1.next;
    }
    
    while (l2 !== null) {
        n2.push(l2.val);
        l2 = l2.next;
    }

    let sum = (BigInt(n1.reverse().join('')) + BigInt(n2.reverse().join(''))).toString();
    console.log(n1)
    console.log(n2)
    let dummy = new ListNode(0);
    let current = dummy;

    
    for (let i = sum.length - 1; i >= 0; i--) {
        current.next = new ListNode(parseInt(sum[i]));
        current = current.next;
    }

    return dummy.next;
};