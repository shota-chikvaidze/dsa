// Merge Two Sorted Linked Lists
// https://neetcode.io/problems/merge-two-sorted-linked-lists


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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        let dummy = new ListNode(0)
        let current = dummy


        while(list1 !== null && list2 !== null) {
            if(list1.val < list2.val) {
                current.next = list1
                list1 = list1.next 
            }else {
                current.next = list2
                list2 = list2.next 

            }
            
            current = current.next

        }

        current.next = list1 || list2


        return dummy.next
    }
}
