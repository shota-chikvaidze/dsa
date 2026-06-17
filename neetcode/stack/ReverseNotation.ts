// Evaluate Reverse Polish Notation
// https://neetcode.io/problems/evaluate-reverse-polish-notation

class ReverseNotation {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {

        let arr: number[] = []

        for(let i = 0; i < tokens.length; i++) {
            if(tokens[i] !== "+" && tokens[i] !== "-" && tokens[i] !== "/" && tokens[i] !== "*") {
                arr.push(Number(tokens[i]))
            }else {
                let popFirst = arr.pop()!
                let popSecond = arr.pop()!
                let operator = tokens[i]
                if(operator === "+") {
                    arr.push(popSecond + popFirst)
                }else if(operator === "-") {
                    arr.push(popSecond - popFirst)
                }else if(operator === "*") {
                    arr.push(popSecond * popFirst)
                }else {
                    arr.push(Math.trunc(popSecond / popFirst))
                }
            }
        }

        let returnNumber = arr[0]

        return returnNumber
    }
}
