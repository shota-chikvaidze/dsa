// Two Integer Sum II
// https://neetcode.io/problems/two-integer-sum-ii

// solution: instead of brute forced nested loops i used two-pointers. big o notation of o(n)


class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0
        let right = numbers.length - 1

        while(left < right) {
            let sum = numbers[left] + numbers[right]

            if(sum === target) {
                break
            }else if(sum < target) {
                left++
            }else {
                right--
            }
        }

        return [left + 1, right + 1]

    }
}
