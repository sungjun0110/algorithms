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
var minDepth = function(root) {
    let depth = 1;
    if (!root) 
        return 0;
    if (!root.left && !root.right)
        return depth
    
    const leftDepth = minDepth(root.left);
    const rightDepth = minDepth(root.right);
    
    if (leftDepth === 0)
        depth += rightDepth;
    else if (rightDepth === 0)
        depth += leftDepth;
    else
        depth += Math.min(leftDepth, rightDepth); 
    
    return depth;
};