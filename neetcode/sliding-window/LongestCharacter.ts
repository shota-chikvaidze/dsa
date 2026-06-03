// Longest Repeating Character Replacement
// https://neetcode.io/problems/longest-repeating-substring-with-replacement


class LongestCharacter {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {

        let left = 0
        let maxLength = 0
        let frequencyMap = new Map<string, number>();

        for(let i = 0; i < s.length; i++) {
            frequencyMap.set(s[i], (frequencyMap.get(s[i]) || 0) + 1)
            let maxFreq = Math.max(...frequencyMap.values())

            if((i - left + 1) - maxFreq > k) {
                frequencyMap.set(s[left], frequencyMap.get(s[left])! - 1)
                left++
            }

            maxLength = i - left + 1
        }
    
        return maxLength
    }
}