/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    
    let count = 0;
    let i = -1;

    let dir = true;
    while(count <= k){
        console.log('index: ' + i + ' second: ' + count);
        console.log('----------------------');

        if(dir)
            i++;
        else
            i--;

        if(i === n - 1)
            dir = false;
        else if(i === 0)
            dir = true; 
        
        count++;

    }


    return i;
};