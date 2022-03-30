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
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 1;
    if (!root) 
        return 0;
    if (!root.left && !root.right)
        return depth
    
    return depth + Math.max(root.left && maxDepth(root.left), root.right && maxDepth(root.right));
};