/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future
to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyAt, max;

    for(let price of prices){
        if(!buyAt || buyAt > price){
            buyAt = price;
            max = 0;
        }

        if(price - buyAt > max){
            max = price - buyAt;
        }
    }

    return max;
};