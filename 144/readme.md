[144 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

给定一个二叉树，返回它的 前序 遍历。

 示例:
```
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 
输出: [1,2,3]
```
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

## 解题思路
1. 当 root == null 时，直接返回，否则将 root.val 插入到返回的结果数组中
2. 当 root.left 和 root.right 均为 null 时直接返回
3. 递归 root.left
4. 递归 root.right