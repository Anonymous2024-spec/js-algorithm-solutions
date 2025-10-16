//  Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
  let minPrice = Infinity; // start with a very large number
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // if current price is smaller, update minPrice
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    // calculate profit if selling today
    let profit = prices[i] - minPrice;

    // update maxProfit if profit is better
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};
