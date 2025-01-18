
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let ans = 0;

    const map = new Array(26).fill(0).map(() => []);

    for(const word of words){
        map[word.charCodeAt(0) - 'a'.charCodeAt(0)].push(word);
    }

    for(const c of s){
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        let current = map[i];
        map[i] = [];

        for(const word of current){
            if(word.length === 1)
                ans++;
            else
                map[word.charCodeAt(1) - 'a'.charCodeAt(0)].push(word.slice(1));
        }

    }


    return ans;
};


// /**
//  * @param {string} s
//  * @param {string[]} words
//  * @return {number}
//  */
// var numMatchingSubseq = function(s, words) {
    
//     let ans = 0;

//     for(const word of words){
//         let sub = "";
//         let i = 0;
//         for(const c of s){
//             if(c === word.charAt(i)){
//                 sub += c;
//                 i++;
//             }
//         }

//         if(sub === word)
//             ans++;
//     }


//     return ans;
// };