// Diameter of Binary Tree
// https://neetcode.io/problems/binary-tree-diameter/question

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

class DiameterOfBinaryTree {

    diameter = 0

    height(node: TreeNode | null): number {

        if(node === null) {
            return 0
        }

        let leftHeight = this.height(node.left)
        let rightHeight = this.height(node.right)

        this.diameter = Math.max(this.diameter, leftHeight + rightHeight)

        return 1 + Math.max(leftHeight, rightHeight)

    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {

        this.height(root)

        return this.diameter

    }
}
