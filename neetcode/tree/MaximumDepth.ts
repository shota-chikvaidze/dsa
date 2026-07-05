// Maximum Depth of Binary Tree
// https://neetcode.io/problems/depth-of-binary-tree

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (root === null) return 0;

        const left = this.maxDepth(root.left);
        const right = this.maxDepth(root.right);

        return Math.max(left, right) + 1;

    }
}
