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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let ans = [];
    helper(root, ans);

    return ans;
};

const helper = (root, ans) => {
    if(root!== null){
        helper(root.left, ans);
        ans.push(root.val);
        helper(root.right, ans);
    }
}