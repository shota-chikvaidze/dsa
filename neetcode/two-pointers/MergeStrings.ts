// Merge Strings Alternately
// https://neetcode.io/problems/merge-strings-alternately

class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let output: string = ""
       
        for(let i = 0; i <= word1.length || i <= word2.length; i++) {
            if(word1[i] !== undefined) {
                output += word1[i]
            }

            if(word2[i] !== undefined) {

                output += word2[i]
            }
        }

        return output

    }
}
