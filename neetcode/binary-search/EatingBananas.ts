// Koko Eating Bananas
// https://neetcode.io/problems/eating-bananas

class EatingBananas {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {

        let left = 1
        let right = 0
        let answer = 0
        
        for(let i = 0; i < piles.length; i++) {
            if(piles[i] > right) {
                right = piles[i]
            }
        }

        while(left <= right) {
            let mid = Math.trunc((left + right) / 2)
            let totalHours = 0
            for(let i = 0; i < piles.length; i++) {
                totalHours += Math.ceil(piles[i] / mid)
            }

            if(totalHours <= h) {
                answer = mid
                right = mid - 1
            }else {
                left = mid + 1
            }
        }


        return answer
    }
}
