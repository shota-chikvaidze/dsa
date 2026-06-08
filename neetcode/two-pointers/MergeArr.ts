// 3Sum
// https://neetcode.io/problems/three-integer-sum

class MergeSortedArray {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let k1 = m - 1
        let k2 = n - 1
        let j = m + n - 1

        while(k1 >= 0 && k2 >= 0) {
            if(nums1[k1] < nums2[k2]) {
                nums1[j] = nums2[k2]
                k2--
            }else {
                nums1[j] = nums1[k1]
                k1--
            }
            j--
        }


        while(k2 >= 0) {
            nums1[j] = nums2[k2]

            k2--
            j--
        }

    }
}
