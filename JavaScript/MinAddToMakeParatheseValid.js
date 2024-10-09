/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let a = 0;
    let b = 0;

    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) === '('){
            a++;
        }else{
            a > 0 ? a-- : b++;
        }

        if(a < 0)
            a = 0;

    }

    return a+b;
};