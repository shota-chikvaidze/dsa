// Sort an array
// https://neetcode.io/problems/sort-an-array

class SortAnArr {
    sortArray(nums: number[]): number[] {
        if(nums.length <= 1) return nums

        let mid = Math.floor(nums.length / 2)
        let left = this.sortArray(nums.slice(0, mid))
        let right = this.sortArray(nums.slice(mid))

        return this.merge(left, right)
    }

    merge(left: number[], right: number[]): number[] {
        let result: number[] = []
        let i = 0
        let j = 0

        while(i < left.length && j < right.length) {
            if(left[i] <= right[j]) {
                result.push(left[i])
                i++
            } else {
                result.push(right[j])
                j++
            }
        }

        while(i < left.length) {
            result.push(left[i])
            i++
        }

        while(j < right.length) {
            result.push(right[j])
            j++
        }

        return result
    }
}