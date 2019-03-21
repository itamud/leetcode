/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (45.86%)
 * Total Accepted:    212.9K
 * Total Submissions: 464.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (ie, from left to right, level by level from leaf to root).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its bottom-up level order traversal as:
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var queue = []
  var result = []
  if (root === null) return []
  queue.push(root)
  var level = []
  var levelRemain = 1
  var nextLevelRemain = 0
  while(queue.length) {
    var node = queue.shift()
    level.push(node.val)
    levelRemain--
    if (node.left !== null) {
      queue.push(node.left)
      nextLevelRemain++
    }
    if (node.right !== null) {
      queue.push(node.right)
      nextLevelRemain++
    }
    if (levelRemain === 0) {
      result.unshift(level)
      level = []
      levelRemain = nextLevelRemain
      nextLevelRemain = 0
    }
  }
  return result
};

