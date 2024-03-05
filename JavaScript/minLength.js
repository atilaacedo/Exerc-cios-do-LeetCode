/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    while(s.length > 1){
        let pref = s.charAt(0);
        let suf = s.charAt(s.length-1);
        if(pref !== suf){
            break;
        }
        for(let i = 1; i < s.length; i++){
            if(i > 0 && s.charAt(i) === pref.charAt(0)){
                pref += s.charAt(i);
                continue;
            }

            break;
        }

        for(let i = s.length-2; i >= 0; i--){
            if(s.charAt(i) === suf.charAt(0) ){
                suf += s.charAt(i);
                continue
            }

            break;
        }
       
        s = s.replace(pref, "");
        s = s.slice(0, s.length - suf.length )
    }
    console.log("Final " + s)
    return s.length;
};


console.log(minimumLength("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbacccabbabccaccbacaaccacacccaccbbbacaabbccbbcbcbcacacccccccbcbbabccaacaabacbbaccccbabbcbccccaccacaccbcbbcbcccabaaaabbbbbbbbbbbbbbb"));
console.log(minimumLength("bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb"))