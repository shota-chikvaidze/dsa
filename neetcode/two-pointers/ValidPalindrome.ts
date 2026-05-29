// Valid Palindrome
// https://neetcode.io/problems/is-palindrome

// solution: for this solution i first cleaned the strings with removing symbols and spaces
// then looped through the array starting from last index and added it reversed variable. 
// then i compared reversed and array if they match return true else false

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        let reversed = []

        let array = s.toLowerCase()
            .replace(/[^a-z0-9]/g, "");

        for(let i = array.length - 1; i >= 0; i--) {
            reversed.push(array[i])
        }
        
        if(reversed.join("") === array) {
            return true
        }

        return false

    }
}


// solution: this is the better solution with big o notation of o(n). for this i used two pointers algorithm 
// if left side value is equal to the right side value then continue the loop else return false

class Solution2 {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        let left = 0
        let stripped = s.toLowerCase()
            .replace(/[^a-z0-9]/g, "");

        let right = stripped.length - 1

    
        while(left < right) {
            if(stripped[left] === stripped[right]) {
                left++
                right--
            }else{
                return false
            }
        }
        
        return true

    }
}
