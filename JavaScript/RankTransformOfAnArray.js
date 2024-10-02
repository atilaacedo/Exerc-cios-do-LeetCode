/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {

    if(arr.length === 0 )
        return [];

    
    const arrAux = [...arr].sort((a, b) => a - b);
    let rank = 1;
    let mapRanks = new Map();

    arrAux.forEach((num) => {
        
        if(!mapRanks.has(num)){
            mapRanks.set(num, rank);
            rank++;
        }

    });

    return arr.map(num => mapRanks.get(num));
};