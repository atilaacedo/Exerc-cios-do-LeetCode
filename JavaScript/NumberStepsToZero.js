/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let numberSteps = 0;
    
    while(num !== 0){
        numberSteps++;  
        num %2 === 0 ? num /=2 : num--;
    }

    return numberSteps;
};