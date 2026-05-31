// Not sorted two sum
// https://neetcode.io/problems/two-integer-sum/question


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] | undefined {
        let map = new Map()

        for(let i = 0; i < nums.length; i++) {
            let complement = target - nums[i]
            let group = map.get(complement)

            if(map.has(complement)) {
                return [i, group]
            }else {
                map.set(nums[i], i)
            }
        }

    }
}
