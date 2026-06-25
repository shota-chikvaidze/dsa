// Reverse Linked List
// https://neetcode.io/problems/reverse-a-linked-list

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class ReverseLinkedList {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode | null {
        let current = head
        let prev = null

        while(current !== null) {
            let nxt = current.next
            current.next = prev
            prev = current
            current = nxt
        }

        return prev
    }
}
