// Invert Binary Tree
// https://neetcode.io/problems/invert-a-binary-tree

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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode | null {

        if(root === null) {
            return null
        }

        let tmp = root.left
        root.left = root.right
        root.right = tmp

        
        this.invertTree(root.left)
        this.invertTree(root.right)

        return root
    }
}
