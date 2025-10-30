/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {

    let op = target[0];

    for (let i = 1; i < target.length; i++) {
        op += Math.max(0, target[i] - target[i - 1]);
    }

    return op;
};
