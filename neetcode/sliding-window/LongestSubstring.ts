// Longest Substring Without Repeating Characters
// https://neetcode.io/problems/longest-substring-without-duplicates

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        
        let left: number = 0
        let set = new Set()
        let maxLength = 0

        for(let i = 0; i < s.length; i++){
            while(set.has(s[i])) {
                set.delete(s[left])
                left++
            }

            set.add(s[i])
            if(maxLength < i - left + 1){
                maxLength = i - left + 1
            }
        }

        return maxLength
        
    }
}
