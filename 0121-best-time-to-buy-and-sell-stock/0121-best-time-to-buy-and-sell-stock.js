/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let leftPrice = 0;
    
    let rightPrice = 1;
    
    let maxProfit = 0;
    
    while (rightPrice < prices.length) {
        if (prices[leftPrice] < prices[rightPrice]) {
            const profit = prices[rightPrice] - prices[leftPrice];
            maxProfit = profit > maxProfit ? profit : maxProfit;
        } else {
            leftPrice = rightPrice;
        }
        rightPrice++
    }
    
    return maxProfit;
};