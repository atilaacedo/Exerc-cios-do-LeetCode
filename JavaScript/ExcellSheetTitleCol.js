/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const numbersTitle = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ans = "";

    while(columnNumber > 0){
        columnNumber--;
        ans = numbersTitle[(columnNumber % 26) -1] + ans;
        columnNumber = Math.floor(columnNumber / 26);
    }


    return ans;
};
