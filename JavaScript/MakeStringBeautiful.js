/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let changes = 0;
    let count = 0;
    for(let i = 0; i < s.length; i++){
        count++;
        if( i < s.length-1 && s.charAt(i) !== s.charAt(i+1)){
            if(count % 2 !== 0){
                changes++;
                s = s.replace(s.charAt(i+1), s.charAt(i));
                i++;
                if(i + 1 === s.length){
                    break;
                }
            }
            count = 0;
        }

        if(i === s.length-1 && count % 2 !== 0){
            changes++;
        }
    }


    return changes;
    
};