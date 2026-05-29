// 3Sum
// https://neetcode.io/problems/three-integer-sum

// solution: first i sorted the array so that i could use
// the two pointers algorithm then i searched for two other numbers whose sum equals
// the negative of the current number.
// if the sum is too small, move the left pointer one index to the right 
// else move the right pointer to decrease the sum because the array is sorted


class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        
        let left = 0 
        let right = nums.length - 1
        nums.sort((a, b) => a - b)

        let answer: number[][] = []

        for(let i = 0; i < nums.length - 2; i++) {
            left = i + 1
            right = nums.length - 1

            if(nums[i] === nums[i - 1]) {
                continue
            }

            while(left < right) {
                let sum = nums[left] + nums[right]
                
                if(sum === -nums[i]) {
                    answer.push([nums[i], nums[left], nums[right]])
                    left++
                    right--
                    while(left < right && nums[left] === nums[left - 1]) left++
                }else if(sum < -nums[i]) {
                    left++
                }else {
                    right--
                }

            }

        }
    
        return answer

    }
}
