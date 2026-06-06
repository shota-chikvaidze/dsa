// Left and Right sum differences
// https://leetcode.com/problems/left-and-right-sum-differences

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums: number[]): number[] {

    let leftOutput = []
    let rightOutput = []
    let output = []
    let prefix = 0
    let suffix = 0

    for(let i = 0; i < nums.length; i++) {
        leftOutput[i] = prefix
        prefix += nums[i]   
    }

    for(let i = nums.length - 1; i >= 0; i--) {
        rightOutput[i] = suffix
        suffix += nums[i]
    }

    for(let i = 0; i <= nums.length - 1; i++) {
        output.push(Math.abs(rightOutput[i] - leftOutput[i]))
    }

    return output
};