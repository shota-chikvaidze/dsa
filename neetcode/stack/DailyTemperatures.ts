// Daily Temperatures
// https://neetcode.io/problems/daily-temperatures

class DailyTemperatures {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let result: number[] = new Array(temperatures.length).fill(0)
        let stack: number[] = []

        for(let i = 0; i < temperatures.length; i++) {
            while(stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let pop = stack.pop()
                if(pop !== undefined) {
                    result[pop] = i - pop
                }
            }

            stack.push(i)
        }

        return result
    }
}