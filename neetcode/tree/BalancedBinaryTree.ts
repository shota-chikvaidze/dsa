// Balanced Binary Tree
// https://neetcode.io/problems/balanced-binary-tree/question

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

class BalancedBinaryTree {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    height(node: TreeNode | null): number {

        if(node === null) {
            return 0
        } 

        let leftHeight = 0
        let rightHeight = 0

        leftHeight = this.height(node.left)
        rightHeight = this.height(node.right)

        return 1 + Math.max(leftHeight, rightHeight)

    }

    isBalanced(root: TreeNode | null): boolean {

        if(root === null) {
            return true
        }

        let leftHeight = 0
        let rightHeight = 0

        leftHeight = this.height(root.left)
        rightHeight = this.height(root.right)

        if(Math.abs(leftHeight - rightHeight) > 1) {
            return false
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right)
    }
}
