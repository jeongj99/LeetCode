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
    const result = [];
    
    let current = root;
    
    while (current) {
        let checker = current.left
        
        if (current.left !== null) {
            while (checker.right !== null && checker.right !== current) {
                checker = checker.right;
            }
            if (!checker.right) {
                checker.right = current;
                current = current.left;
            } else {
                checker.right = null;
                result.push(current.val);
                current = current.right;
            }
        } else {
            result.push(current.val);
            current = current.right;
        }
    }
    return result;
};