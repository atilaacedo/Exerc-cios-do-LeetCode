/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    let chemistry = 0;

    skill.sort((a,b) => a-b);

    let i = 0;
    let j = skill.length-1;
    let target = skill[0] + skill[skill.length -1];
    while(i < j){
        let sum = skill[i] + skill[j];
        if(sum !== target)
            return -1;
        
        chemistry += skill[i] * skill[j];

        i++;
        j--;
    }

    return chemistry;
};