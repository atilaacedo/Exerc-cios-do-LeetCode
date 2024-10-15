/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let steps = 0;
    let auxZ = 0;
    for(let i = s.length-1; i >= 0 ; i--){
        if(s.charAt(i) === '0')
            auxZ ++;
        else
            steps+=auxZ;
    }
    return steps;
};