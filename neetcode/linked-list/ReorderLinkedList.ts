// Reorder Linked List
// https://neetcode.io/problems/reorder-linked-list


class ListNode {
    val: number
    next: ListNode | null
    constructor(val = 0, next: ListNode | null = null) {
        this.val = val
        this.next = next
    }
}

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): ListNode {
        
        let fast = head
        let slow = head

        while(fast && fast.next !== null) {
            slow = slow?.next ?? null
            fast = fast.next.next
        }

        let prev = null
        let current = slow

        while(current !== null) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }

        let dummy = new ListNode(0)
        let finishedCurr = dummy

        while(head !== null && prev !== null && head !== prev) {
            finishedCurr.next = head
            head = head?.next
            finishedCurr = finishedCurr.next

            finishedCurr.next = prev
            prev = prev.next
            finishedCurr = finishedCurr.next
        }


        return dummy.next!
    }
}
