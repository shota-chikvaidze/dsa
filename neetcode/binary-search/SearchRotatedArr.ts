// Search in Rotated Sorted Array
// https://neetcode.io/problems/find-target-in-rotated-sorted-array

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
            let mid = Math.trunc((left + right) / 2)

            if(nums[mid] === target) {
                return mid
            }

            if(nums[left] <= nums[mid]) {
                if(target <= nums[mid] && target >= nums[left]) {
                    right = mid - 1
                }else {
                    left = mid + 1
                }
            }else {
                if(target >= nums[mid] && target <= nums[right]) {
                    left = mid + 1
                }else {
                    right = mid - 1
                }
            }

        }

        return -1
    }
}
