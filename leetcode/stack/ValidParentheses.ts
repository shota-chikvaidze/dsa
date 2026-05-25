// Valid Parentheses
// https://leetcode.com/problems/valid-parentheses

var isValid = function(s: string) {

    let stack = []

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i])
        }else{
            let top = stack.pop()
            if(s[i] === ")" && top !== "(") return false
            if(s[i] === "]" && top !== "[") return false
            if(s[i] === "}" && top !== "{") return false
        }
    }

    return stack.length === 0
};

isValid("()[]{}")