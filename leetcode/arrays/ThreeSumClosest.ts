// 3Sum Closest
// https://leetcode.com/problems/3sum-closest/description

function threeSumClosest(nums: number[], target: number): number {
    
    nums.sort((a, b) => a - b)

    let answer = nums[0] + nums[1] + nums[2];

    for(let i = 0; i < nums.length - 2; i++) {
        let left = i + 1
        let right = nums.length - 1
        
        while(left < right) {
            let sum = nums[left] + nums[right] + nums[i];
        
            if(Math.abs(sum - target) < Math.abs(answer - target)) {
                answer = sum;
            }
            
            if(sum < target) {
                left++
            }else if(sum > target) {
                right--
            }else {
                return sum;
            }
        }
    }

    return answer

};