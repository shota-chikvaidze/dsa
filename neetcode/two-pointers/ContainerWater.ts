// Container With Most Water
// https://neetcode.io/problems/max-water-container

// solution: i used two pointers algorithm. 
// in the while loop three things happen: first it calculates the water, 
// second if the water is greater then maxWater then assign the water to maxWater
// and third if left height is greater than right height move the right else increase the index of the left

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        
        let left = 0
        let right = heights.length - 1

        let maxWater: number = 0

        while(left < right) {
            let water = (right - left) * Math.min(heights[left], heights[right])

            if(water > maxWater) {
                maxWater = water
            }

            if(heights[left] > heights[right]) {
                right--
            }else{
                left++
            }

        }

        return maxWater
    }
}
