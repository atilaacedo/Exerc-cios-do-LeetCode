/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     if(s.length !== t.length) 
//         return false;

//     let compareString = s;
//     for(let i = 0; i < t.length; i++){
//         if(compareString.includes(t.charAt(i))){
//             compareString = compareString.replace(t.charAt(i), '');
//             continue;
//         }

//         return false;
//     }


//     return true;
// };

var isAnagram = function(s, t) {
    return (s.split('').sort().join('')) === (t.split('').sort().join(''));
};
