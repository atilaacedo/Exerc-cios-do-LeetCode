/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    if(s.length <= 2)
        return s.length;


    let len = s.length;

    const freq =  {};

    for(let c of s){
        freq[c] = (freq[c] | 0) + 1;
    }


    for(let f of Object.values(freq)){

        if(f >= 3){
            while(f >= 3){
                len -= 2;
                f = f-2;
            }
        }

    }

    return len;
};