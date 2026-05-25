// Design Dynamic Array (Resizable Array)
// https://neetcode.io/problems/dynamicArray/question

class DynamicArray {
    size: number
    array: number[]
    capacity: number
    
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity
        this.array = []
        this.size = 0
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(index: number): number {
        if(index < 0 || index >= this.size) {
            throw new Error("index out of bounds")
        }
        
        return this.array[index]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(index: number, n: number): void {
        if(index < 0 || index >= this.size) {
            throw new Error("index out of bounds")
        }

        this.array[index] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if(this.capacity === this.size) {
            this.resize()
        }

        this.array[this.size] = n
        this.size++
    }

    /**
     * @returns {number}
     */
    popback(): number {
        if(this.size === 0) {
            throw new Error("array is empty")
        }

        const value = this.array[this.size - 1]
        this.size--
        return value
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity = this.capacity * 2
        const newData = new Array(this.capacity)

        for(let i = 0; i < this.size; i++) {
            newData[i] = this.array[i]
        }

        this.array = newData
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity
    }
}

let arr = new DynamicArray(3)

arr.pushback(10)
arr.pushback(20)
arr.pushback(30)
arr.size = 3

arr.pushback(4)

console.log(arr)
