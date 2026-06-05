// Top K Frequent Elements
// https://neetcode.io/problems/top-k-elements-in-list

class FrequentElements {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        let map = new Map()
        let returnArr = []

        for(let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        let entries = [...map.entries()]
        let sorted = entries.sort((a, b) => b[1] - a[1])
        returnArr = sorted.slice(0, k).map(entry => entry[0])
        
        return returnArr
    }
}
