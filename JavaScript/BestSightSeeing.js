/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let firstEl = values[0] + 0;
    let result = 0;

    for(let i = 1; i < values.length; i++){
        const secondEL = values[i] - i;


        const currentPair = firstEl + secondEL;

        result = Math.max(currentPair, result);
        firstEl = Math.max(firstEl, values[i] + i);
    }


    return result;
};