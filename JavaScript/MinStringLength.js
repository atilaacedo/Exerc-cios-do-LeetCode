/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    while(s.indexOf("AB") !== -1 || s.indexOf("CD") !== -1){
        s = s.replaceAll("AB", "");
        s = s.replaceAll("CD", "");
    }


    return s.length;
};