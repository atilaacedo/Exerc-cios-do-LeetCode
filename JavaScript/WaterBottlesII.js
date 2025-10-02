/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
    let totalDrunk = numBottles;
    let emptyBottles = numBottles;

    while (emptyBottles >= numExchange) {
        emptyBottles -= numExchange - 1;
        totalDrunk++;
        numExchange++;

    }
    return totalDrunk;
};