/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let n1 = 0;
    let n2 = 1;
    let aux = 0;
    for(let i = 1; i <= n; i++){
        aux = n1 + n2;
        n1 = n2;
        n2 = aux;
    }

    return n2;
};  