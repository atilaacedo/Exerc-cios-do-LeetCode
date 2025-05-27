/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {

    let n1 = 0;
    let n2 = 0;

    for(let i = 1; i <= n; i++) {

        if(i % m !== 0) {
            n1 += i;
            continue;
        }

        n2 += i;
    }


    return n1 - n2;
};