// Remove Nth Node From End of List
// https://neetcode.io/problems/remove-node-from-end-of-linked-list


class ListNode {
    val: number
    next: ListNode | null
    constructor(val = 0, next: ListNode | null = null) {
        this.val = val
        this.next = next
    }
}

class RemoveNode {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {

        let dummy = new ListNode(0)
        dummy.next = head
        let fast = dummy
        let slow = dummy

        for(let i = 0; i <= n; i++) {
            fast = fast?.next!
        }

        while(fast !== null) {
            fast = fast?.next!
            slow = slow?.next!
        }

        slow.next = slow.next?.next!

        return dummy?.next!

    }
}
