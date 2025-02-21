var setNodes = new Set();

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
 */
var FindElements = function(root) {
    root.val = 0;
    setNodes = new Set();
    recoveryTree(root);

    console.log(root);
};

const recoveryTree = (root) => {
    if(!root)
        return;

    setNodes.add(root.val);

    if(root.left){
       
        root.left.val = root.val * 2 + 1;
        recoveryTree(root.left);
    }


    if(root.right){

        root.right.val = root.val * 2 + 2;
        recoveryTree(root.right);
    }
}

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
   return setNodes.has(target); 
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */