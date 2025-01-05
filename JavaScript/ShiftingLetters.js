/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
  
    const shift = Array(s.length + 1).fill(0);

    for(let i = 0; i < shifts.length; i++){
        const start = shifts[i][0];
        const final = shifts[i][1];
        const dir = shifts[i][2];

        shift[start] += dir === 1 ? 1 : -1;

        if (final + 1 < s.length) 
            shift[final + 1] -= dir === 1 ? 1 : -1;
    }

    const ans = s.split('');
    let aux = 0;

    for(let i = 0; i < s.length; ++i){
        aux += shift[i];
        shift[i] = aux;
    }

    for(let i = 0; i < s.length; ++i){
        let netShift = (shift[i] % 26 + 26) % 26;
        ans[i] = String.fromCharCode('a'.charCodeAt(0) + (s.charCodeAt(i) - 'a'.charCodeAt(0) + netShift) % 26);
    }

    return ans.join('');
};