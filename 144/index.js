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
var preorderTraversal = function(root) {
    var res = []
    var getRes = function(r) {
        if (r != null) {
            res.push(r.val)
        } else {
            return
        }
        if (r.left == null && r.right == null) return
        getRes(r.left)
        getRes(r.right)
    }
    getRes(root)
    return res
};