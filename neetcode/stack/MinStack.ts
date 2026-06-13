// Min Stack
// https://neetcode.io/problems/minimum-stack


class MinStack {
    data: any;
    min: any
    
    constructor() {
        this.data = []
        this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.data.push(val)
        const currentMin = this.min.length === 0 ? val : this.min[this.min.length - 1]
        this.min.push(Math.min(val, currentMin))
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.data.pop()
        this.min.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.data[this.data.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        let min = this.min[this.min.length - 1]
        return min
    }
}
