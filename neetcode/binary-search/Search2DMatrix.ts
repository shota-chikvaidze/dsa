// Search a 2D Matrix
// https://neetcode.io/problems/search-2d-matrix

class Search2DMatrix {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {

        let left = 0
        let right = matrix.length - 1
        let row: number[] = []


        while(left <= right) {
            let mid = Math.trunc((left + right) / 2)

            if(matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target ) {
                row = matrix[mid]
                break
            }else if(matrix[mid][0] < target){
                left = mid + 1
            }else {
                right = mid - 1
            }

        }

        let rowLeft = 0
        let rowRight = row.length - 1

        while(rowLeft <= rowRight) {
            let mid = Math.trunc((rowLeft + rowRight) / 2)

            if(row[mid] === target) {
                return true
            }else if(row[mid] > target) {
                rowRight = mid - 1
            }else {
                rowLeft = mid + 1
            }

        }

        return false

    }
}
