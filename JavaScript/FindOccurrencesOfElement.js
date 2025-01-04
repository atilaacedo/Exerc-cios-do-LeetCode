/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
    
    let maxOcc = 0;
    const occurences = [];
    const mapOcc = new Map();

    nums.forEach((n,i) =>{
        if(n === x){
            maxOcc++;
            mapOcc.set(maxOcc, i);
        }
    });
    
    for(let i = 0; i < queries.length; i++){
        if(queries[i] > maxOcc){
            occurences.push(-1);
        }else{
            occurences.push(mapOcc.get(queries[i]));
        }
    }


    return occurences;
};