// Majority Element
// https://leetcode.com/problems/majority-element/description


function majorityElement(nums: number[]): number {
    
    let hashmap = new Map();
    let returnNumCount = 0
    let returnNum = 0

    for(let i = 0; i < nums.length; i++) {

        if(hashmap.has(nums[i])) {
            hashmap.set(nums[i], hashmap.get(nums[i]) + 1)
        }else {
            hashmap.set(nums[i], 1)
        }
   
    }

    for (const [k, v] of hashmap.entries()) {
        if(returnNumCount < v) {
            returnNumCount = v
            returnNum = k;
        }
    }

    return returnNum;

};