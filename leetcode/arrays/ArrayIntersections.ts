// Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/description


function intersection(nums1: number[], nums2: number[]): number[] {
    
    let map = new Map();

    let intersection = new Set<number>()

    for(let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], nums1[i])
    }

    for(let i = 0; i < nums2.length; i++) {
        if(map.has(nums2[i])) {
            intersection.add(nums2[i])
        }
    }

    return [...intersection]

};