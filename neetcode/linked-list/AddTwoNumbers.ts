// Add Two Numbers
// https://neetcode.io/problems/add-two-numbers

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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {

        let dummy = new ListNode(0)
        let current = dummy
        let carry = 0


        while(l1 || l2 || carry) {
            let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
            carry = Math.floor(sum  / 10)
            let digit = sum % 10

            current.next = new ListNode(digit) 
            current = current?.next
            
            l1 = l1?.next ?? null
            l2 = l2?.next ?? null
        }


        return dummy.next!

    }
}
