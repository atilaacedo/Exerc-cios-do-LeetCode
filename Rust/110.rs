// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::cell::RefCell;
use std::cmp;
use std::rc::Rc;
impl Solution {
    pub fn is_balanced(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        Self::dfs(&root) != -1
    }

    fn dfs(node: &Option<Rc<RefCell<TreeNode>>>) -> i32{
        let node_ref = match node {
            Some(n) => n.borrow(),
            None => return 0
        };

        let left_height = Self::dfs(&node_ref.left);
        if left_height == -1 {
            return -1;
        }
        let right_height = Self::dfs(&node_ref.right);
        if (right_height == -1) {
            return -1;
        }

        if (left_height - right_height).abs() > 1 {
            return -1;
        }

        1 + cmp::max(left_height, right_height)
    }
}
