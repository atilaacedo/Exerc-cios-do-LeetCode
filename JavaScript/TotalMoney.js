/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  
    let weeks = Math.floor(n / 7);
    let days = n % 7;
    let total = 0;

    for (let i = 0; i < weeks; i++) {
        total += 7 * (i + 1) + 21;
    }
    total += days * (weeks + 1) + (days * (days - 1)) / 2;

    return total;
};