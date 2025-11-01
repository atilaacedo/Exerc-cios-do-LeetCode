/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {

    const freq = new Set();
    for (const num of nums) {
        freq.add(num);
    }
    let ans = new ListNode();
    let temp = ans;
    while (head !== null) {
        const num = head.val;
      
        if (!freq.has(num)) {
            ans.next = head;
            ans = ans.next;
        }

        head = head.next;
    }
    ans.next = null;
    return temp.next;
};
