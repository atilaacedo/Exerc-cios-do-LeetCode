/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let ans = 0;
    let count = 0;
    let aux = 0;
    let lastFruit = -1;
    let secondLastFruit = -1;

    for (const fruit of fruits) {
        if (fruit === lastFruit || fruit === secondLastFruit) {
            aux++;
        }else{
            aux = count + 1;
        }

        if (fruit === lastFruit){
            count++;
        }
        else {
            count = 1;
            secondLastFruit = lastFruit;
            lastFruit = fruit;
        }

        ans = Math.max(ans, aux);
    }


    return ans;
};