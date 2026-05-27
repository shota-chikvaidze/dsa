// Products of Array Except Self
// https://neetcode.io/problems/products-of-array-discluding-self

// solution 1 with big o notation of o(n^2)

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums: number[]): number[] {
        let output = []

        for(let i = 0; i < nums.length; i++) {
            let product = 1
            
            for(let j = 0; j < nums.length; j++) {
                if(i !== j) {
                    product *= nums[j]
                }
            }

           output.push(product)

        }

        return output
       
    }
}

// better solution with big o notation of o(n)

class Solution2 {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums: number[]): number[] {
        let output = [] 
        let prefix = 1
        let suffix = 1

        for(let i = 0; i < nums.length; i++) {

            output[i] = prefix
            prefix *= nums[i]
            
        }

        for(let i = nums.length - 1; i >= 0; i--) {

            output[i] *= suffix
            suffix *= nums[i]

        }

        return output
       
    }
}
