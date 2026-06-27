// Linked List Cycle Detection
// https://neetcode.io/problems/linked-list-cycle-detection

class ListNode {
    val: number
    next: ListNode | null
    constructor(val = 0, next: ListNode | null = null) {
        this.val = val
        this.next = next
    }
}


// optimal solution with the big O notation of O(1) -- Solved with Floyd's Cycle

class CycleDetection1 {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        
        let slow = head
        let fast = head


        while(fast && fast.next !== null && slow) {
            slow = slow.next
            fast = fast.next.next

            if(slow === fast) {
                return true
            }

        }

        return false

    }
}



// slower solution with the big O notation of O(n)
class CycleDetection2 {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {

        let map = new Map()

        while(head) {
            map.set(head, head.val)
            head = head.next

            if(map.has(head)) {
                return true
            }
        }

        return false

    }
}
