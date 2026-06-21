// Find Minimum in Rotated Sorted Array
// https://neetcode.io/problems/find-minimum-in-rotated-sorted-array

class RotatedSortedArray {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0
        let right = nums.length - 1
        let result = Infinity

        while(left <= right) {
            let mid = Math.trunc((left + right) / 2)
            result = Math.min(nums[mid], result)

            if(nums[mid] > nums[nums.length - 1]) {
                left = mid + 1
            }else {
                right = mid - 1
                if(nums[mid] < result) {
                    result = nums[mid]
                }
            }

        }

        return result
    }
}
