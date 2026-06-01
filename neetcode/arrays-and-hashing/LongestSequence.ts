// Longest Consecutive Sequence
// https://neetcode.io/problems/longest-consecutive-sequence


class LongestSequence {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(!nums.length) return 0

        let numbers = new Set()

        for(let i = 0; i < nums.length; i++) {
            numbers.add(nums[i])
        }

        let length = 1
        let longest = 1

        for(let i = 0; i < nums.length; i++) {

            if(!numbers.has(nums[i] - 1)) {
                let start = nums[i]
                length = 1
                
                while(numbers.has(start + length)) {
                    length++
                }
                
                longest = Math.max(longest, length)
            }

        }
        
        return longest
        
    }
}

const longestConsecutive = new LongestSequence()

longestConsecutive.longestConsecutive([1, 3, 2, 5, 10, 4, 6,])