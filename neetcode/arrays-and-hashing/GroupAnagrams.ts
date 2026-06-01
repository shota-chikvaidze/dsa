// Group Anagrams
// https://neetcode.io/problems/anagram-groups

class GroupAnagrams {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        let map = new Map()

        for(const str of strs) {
            const key = str.split("").sort().join("")
            const group = map.get(key)
            
            if(group) {
                group.push(str)
            }else {
                map.set(key, [str])
            }
        }

        return [...map.values()]

    }
}
