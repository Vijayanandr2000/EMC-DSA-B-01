// https://leetcode.com/problems/binary-tree-inorder-traversal/description/
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
var inorderTraversal = function (root) {
  let res = [];

  function dfs(root) {
    if (!root) return;

    dfs(root.left);
    res.push(root.val);
    dfs(root.right);
  }
  dfs(root);

  return res;
};
