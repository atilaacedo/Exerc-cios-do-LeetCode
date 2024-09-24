/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let columnNumber = 0;
    const mapLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(columnTitle.length > 0){
        for(let i = 0; i < columnTitle.length; i++){
            columnNumber += (mapLetters.indexOf(columnTitle.charAt(i)) + 1) * Math.pow(26, columnTitle.length - (i+1));
        }
    }else{
        columnNumber = mapLetters.indexOf(columnTitle) + 1;
    }

    
    return columnNumber;
};
