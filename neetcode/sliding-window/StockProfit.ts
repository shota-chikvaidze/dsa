// Best Time to Buy and Sell Stock
// https://neetcode.io/problems/buy-and-sell-crypto

class StockProfit {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {

        let minPrice = prices[0]
        let maxProfit = 0


        for(let i = 0; i < prices.length; i++) {
            
            if(prices[i] < minPrice) {
                minPrice = prices[i]
            }

            let ifSold = prices[i] - minPrice

            if(ifSold > maxProfit) {
                maxProfit = ifSold
            }
        }

        return maxProfit

    }
}
