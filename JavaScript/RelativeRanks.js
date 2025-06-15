/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  
    const rank = [];

    let pos = 0;

    const sortedScores = [...score].sort((a, b) => b - a);
    for (let i = 0; i < score.length; i++) {
        pos = sortedScores.indexOf(score[i]);
        if (pos === 0) {
            rank.push("Gold Medal");
        } else if (pos === 1) {
            rank.push("Silver Medal");
        } else if (pos === 2) {
            rank.push("Bronze Medal");
        } else {
            rank.push((pos + 1).toString());
        }
    }


    
    return rank;
};