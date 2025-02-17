/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const charCount = new Array(26).fill(0);
    for(const c of tiles){
        charCount[c.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    return findPossibilities(charCount);
};

const findPossibilities = (charCount) =>{
    let total = 0;
    for(let i = 0; i < 26; i++){
        if(charCount[i] === 0)
            continue;

        total++;
        charCount[i]--;
        total += findPossibilities(charCount);
        charCount[i]++;

    }

    return total;
}