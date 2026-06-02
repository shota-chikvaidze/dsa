// Trapping Rain Water
// https://neetcode.io/problems/trapping-rain-water

class TrappingWater {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {

        let returnArr = 0

        if(height.length === 0) return 0

        let suffix: number[] = new Array(height.length)
        suffix[suffix.length - 1] = height[height.length - 1]

        for(let i = height.length - 2; i >= 0; i--) {
            suffix[i] = Math.max(suffix[i+1], height[i])
        }

        let prefix: number[] = new Array(height.length)
        prefix[0] = height[0]

        for(let i = 1; i < height.length; i++) {
            prefix[i] = Math.max(prefix[i-1], height[i])
        }

        for(let i = 0; i < height.length; i++) {
            let water = Math.min(prefix[i], suffix[i]) - height[i]
            returnArr += water
        }

        return returnArr
    }
}
