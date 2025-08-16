/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    
    const numStr = num.toString();
    const index = numStr.indexOf('6');

    if (index === -1) {
        return num; 
    }
    const maxNumStr = numStr.substring(0, index) + '9' + numStr.substring(index + 1);

    return parseInt(maxNumStr);
};