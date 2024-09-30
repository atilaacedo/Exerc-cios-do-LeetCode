/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let binary = [];

    a  = a.split("").reverse();
    b = b.split("").reverse();

    let maxN = Math.max(a.length, b.length);
    let carry = 0;
    let nA, nB;
    for(let i = 0; i < maxN; i++){
        a[i] !== undefined ? nA = parseInt(a[i]) : nA = 0;
        b[i] !== undefined ? nB = parseInt(b[i]) : nB = 0;

        let sum = nA + nB + carry;

        if(sum === 0){
            binary.push(0);
            continue;
        }


        if(sum % 2 === 0){
            binary.push(0);
            carry = 1;
        }else{
            binary.push(1);
            sum === 3 ? carry = 1 : carry = 0;
        }
    }

    if(carry === 1)
        binary.push(1)

    return binary.reverse().join("");
};