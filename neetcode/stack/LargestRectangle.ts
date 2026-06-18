// Largest Rectangle In Histogram
// https://neetcode.io/problems/largest-rectangle-in-histogram

class Solution {
    largestRectangleArea(heights: number[]): number {

        let stack: number[][] = []
        let maxArea: number = 0
        let area: number[] = []

        for(let i = 0; i < heights.length; i++) {

            while(stack.length !== 0 && heights[i] < stack[stack.length - 1][1]) {
                const popped = stack.pop()!
                const startIndex = stack.length === 0 ? 0 : stack[stack.length - 1][0] + 1
                
                const width = i - startIndex
                area.push(width * popped[1])
            }

            stack.push([i, heights[i]])
        }

        while(stack.length !== 0) {
            const popped = stack.pop()!
            const startIndex = stack.length === 0 ? 0 : stack[stack.length - 1][0] + 1

            const width = heights.length - startIndex
            area.push(width * popped[1])
        }

        for(let i = 0; i < area.length; i++) {
            if(area[i] > maxArea) {
                maxArea = area[i]
            }
        }

        return maxArea
    }
}