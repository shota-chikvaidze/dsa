// Binary Search
// https://neetcode.io/problems/binary-search

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0
        let right = nums.length - 1

        while(left <= right) {
            let midPoint = Math.trunc((left + right) / 2)

            if(nums[midPoint] === target) {
                return midPoint
            }else if(nums[midPoint] > target) {
                right = midPoint - 1
            }else {
                left = midPoint + 1
            }
        }

        return -1
    }
}
