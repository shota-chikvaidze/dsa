// Remove Duplicates From Sorted Array
// https://neetcode.io/problems/remove-duplicates-from-sorted-array

class RemoveDuplicates {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {

        let k = 1

        for(let i = 1; i < nums.length; i++) {
            if(nums[i] !== nums[i - 1]) {
                nums[k] = nums[i]
                k++
            }
        }

        return k

    }
}
