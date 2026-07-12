// Subtree of Another Tree
// https://neetcode.io/problems/subtree-of-a-binary-tree

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

class SubtreeOfAnotherTree {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    sameTree(a: TreeNode | null, b: TreeNode | null): boolean {
        if(a === null && b === null) {
            return true
        }

        if(a === null || b === null) {
            return false
        }

        if(a.val !== b.val) {
            return false
        }

        return this.sameTree(a.right, b.right) && this.sameTree(a.left, b.left)

    }

    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

        if(root === null) return false

        if(this.sameTree(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)) {
            return true
        }

        return false

    }
}
