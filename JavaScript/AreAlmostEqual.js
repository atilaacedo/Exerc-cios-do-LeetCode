/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1 === s2)
        return true;

    const len = s1.length;

    const freqS1 = new Array(26).fill(0);
    const freqS2 = new Array(26).fill(0);

    let diffs = 0;

    for(let i = 0; i < len; i++){
        const c1 = s1.charAt(i);
        const c2 = s2.charAt(i);

        if(c1 !== c2){
            diffs++;

            if(diffs > 2)
                return false;
        }

        freqS1[c1.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        freqS2[c2.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

   

    return freqS1.every((c, i) => c === freqS2[i]);

};