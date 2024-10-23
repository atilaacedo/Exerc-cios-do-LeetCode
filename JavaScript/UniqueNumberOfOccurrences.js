/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    arr.sort((a,b) => a-b);

    let occ = [];
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        count++;
        if(i < arr.length-1 && arr[i] !== arr[i+1]){
            let t = occ.findIndex((n) => n === count);
            if(t !== -1)
                return false;
            occ.push(count);
            count = 0;
        }

        if(i === arr.length-1){
            let t = occ.findIndex((n) => n === count);
            if(t !== -1)
                return false;
            occ.push(count);
            count = 0;
        }
    }

    return true;
};