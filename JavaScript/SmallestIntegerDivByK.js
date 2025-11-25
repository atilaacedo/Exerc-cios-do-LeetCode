/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
    if (k % 2 === 0 || k % 5 === 0) return -1;

    if(k === 1)
        return 1;

    let j = 1;
    let acc = 1;
    while (acc !== 0) {
        acc = (acc * 10 + 1) % k;
        j++;
    }

    return j;
};
