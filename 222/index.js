/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (root == null) {
        return 0;
    }
    let lH, rH = 0;
    let lNode, rNode = root;

    while (lNode) {
        lH++;
        lNode = lNode.left;
    }
    while (rNode) {
        rH++;
        rNode = rNode.right;
    }
    if (lH == rH) {
        return 2 ** lH - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
};