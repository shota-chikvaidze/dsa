// Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description

function removeDuplicates(nums: number[]): number {

    let k = 1

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]
            k++
        }else {
            nums[k] = nums[i - 1]
        }
    }

    return k;

};