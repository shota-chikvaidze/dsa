// Valid Anagram
// https://neetcode.io/problems/is-anagram

// solution 1 with object

class isAnagram {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) {
            return false
        }

        let count: Record<string, number> = {}

        for(let i = 0; i < s.length; i++) {
            let char = s[i]

            if(count[char]) {
                count[char] = count[char] + 1
            }else{
                count[char] = 1  
            }
        }

        for(let i = 0; i < t.length; i++) {
            let char = t[i]

            if(!count[char]) {
                return false
            }

            count[char]--
        }

        return true

    }
}


// solution 2 with map

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) {
            return false
        }

        let map = new Map()

        for(let i = 0; i < s.length; i++) {
            let char = s[i]

            if(map.has(char)) {
                map.set(char, map.get(char) + 1)
            }else{
                map.set(char, 1)
            }
        }

        for(let i = 0; i < t.length; i++) {
            let char = t[i]

            if(!map.has(char)) {
                return false
            }

            let newCount = map.get(char) - 1
            map.set(char, newCount)

            if(newCount < 0) {
                return false
            }

        }

        return true

    }
}
