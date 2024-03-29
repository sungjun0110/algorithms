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
 * @param {number} targetSum
 * @return {boolean}
 */
// returns true if there is a root-to-leaf path such that sums all the values along the path equals targetSum
var hasPathSum = function(root, targetSum) {
    if (!root) 
        return false
    if (!root.left && !root.right)
        if (targetSum - root.val === 0) return true;
        else return false;

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};