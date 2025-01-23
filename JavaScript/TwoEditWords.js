/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    const editWords = [];

    for(let i = 0; i < queries.length; i++){
        for(let j = 0; j < dictionary.length; j++){
            let changes = 0;
            
            if(queries[i] === dictionary[j]){
                editWords.push(queries[i]);
                break;
            }

            for(let k = 0; k < queries[i].length; k++){
                if(queries[i].charAt(k) !== dictionary[i].charAt(k)){
                    changes++;
                }

                if(changes > 2)
                    break;
            }

            if(changes <= 2){
                editWords.push(queries[i]);
                break;
            }
        }
    }


    return editWords;
};