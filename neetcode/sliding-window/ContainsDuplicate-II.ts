// Contains Duplicate II
// https://neetcode.io/problems/contains-duplicate-ii

class ContainsDuplicate {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        
        let map = new Map()

        for(let i = 0; i < nums.length; i++) {
            if(map.has(nums[i]) && i - map.get(nums[i]) <= k) {
                return true
            }

            
            map.set(nums[i], i)
        }

        return false
    }
}
