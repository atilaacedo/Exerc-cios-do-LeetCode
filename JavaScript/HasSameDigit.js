/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    
    let newS = "";
    let i = 0;
    while(s.length > 2){
        let op = (parseInt(s[i]) + parseInt(s[i +1])) % 10;
        newS += op.toString();
        i++;

        if(i + 1 >= s.length){
            s = newS;
            newS = "";
            i = 0;
        }
    }

    return s[0] === s[1];
};