// Permutation in String
// https://neetcode.io/problems/permutation-string

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {

        let need = new Map()
        let window = new Map()

        for(let i = 0; i < s1.length; i++) {
            need.set(s1[i], (need.get(s1[i]) || 0) + 1)
        }

        let left = 0
        let matches = 0
        const requiredMatches = need.size;


        for(let right = 0; right < s2.length; right++) {
            let char = s2[right]

            window.set(s2[right], (window.get(s2[right]) || 0) + 1)
 
            if(need.has(char) && window.get(char) === need.get(char)) {
                matches++
            }

            if(right - left + 1 > s1.length) {
                let leftChar = s2[left]

                if(need.has(leftChar) && window.get(leftChar) === need.get(leftChar)) {
                    matches--;
                }
                window.set(leftChar, window.get(leftChar)! - 1);

                left++

            }

            if(matches === requiredMatches) {
                return true
            }

        }


        return false
    }
}
