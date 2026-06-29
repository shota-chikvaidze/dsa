// Find the Duplicate Number
// https://neetcode.io/problems/find-duplicate-integer

class DuplicateNumber {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let slow = nums[0]
        let fast = nums[0]

        do {
            slow = nums[slow]
            fast = nums[nums[fast]]
        } while(slow !== fast)

        let slow2 = nums[0]

        while(slow2 !== slow) {
            slow = nums[slow]
            slow2 = nums[slow2]
        }

        return slow
    }
}
