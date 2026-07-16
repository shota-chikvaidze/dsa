// Binary Tree Right Side View
// https://neetcode.io/problems/binary-tree-right-side-view/question

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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        let result: number[] = []
        let queue = [root]
        
        if (!root) return result; 

        while(queue.length > 0) {
            let rightSide = null;
            let levelSize = queue.length

            for(let i = 0; i < levelSize; i++) {
                let node = queue.shift()
                if(node) {
                    rightSide = node

                    if(node.left) {
                        queue.push(node.left)
                    }

                    if(node.right) {
                        queue.push(node.right)
                    }
                }
            }

            if(rightSide) {
                result.push(rightSide.val)
            }
        }

        return result

    }
}
