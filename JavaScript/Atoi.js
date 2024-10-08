/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trimStart();
    console.log(s)
    let numberConvert = "0";
    let charge = s.charAt(0) === '-' ? -1 : 1;
    const MIN_32BITS_SIGNED = -0x80000000;   
    const MAX_32BITS_SIGNED = 0x7FFFFFFF; 

    for( let i = 0; i < s.length; i++){
        if((s.charAt(i) === '-' || s.charAt(i) === '+') && i === 0)
            continue
        
        if(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)
            numberConvert += s.charAt(i);
        else
            break;
    }

    let num = parseInt(numberConvert) * charge;

    
    if(num > MAX_32BITS_SIGNED)
        return MAX_32BITS_SIGNED;
    else if(num < MIN_32BITS_SIGNED)
        return MIN_32BITS_SIGNED;

    return num;
};


let integer = myAtoi("     +x11007071063");

console.log(integer)