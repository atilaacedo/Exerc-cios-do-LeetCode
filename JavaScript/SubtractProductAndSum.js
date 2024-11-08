/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const strN = n.toString();
    let product = parseInt(strN.charAt(0));
    let sum = parseInt(strN.charAt(0));
    for(let i = 1; i < strN.length; i++ ){
        product*= parseInt(strN.charAt(i));
        sum += parseInt(strN.charAt(i));
    }


    return product - sum;
};