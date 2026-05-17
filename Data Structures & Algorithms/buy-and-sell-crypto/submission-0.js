class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    // prices = [10,8,7,5,2];
    maxProfit(prices) {
        let bought = prices[0];//first day
        let profit = 0;
        for(let i=1; i<prices.length;i++) {
            let sold = prices[i]; //2nd day
            if(sold > bought) {
                if(sold - bought > profit) {
                    profit = sold - bought;
                }
            } else {
                bought = prices[i]; 
            }
        }
        return profit;
    }
}
