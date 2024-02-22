/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const votou = [];
    const possiveisJurados = {};
    let judge = -1;

    if(trust.length === 0 && n === 1) 
        return n;

    for(let i =0; i < trust.length; i++){
        if(votou.indexOf(trust[i][0]) === -1){
            votou.push(trust[i][0]);
        }    
        console.log(votou)
        if(votou.length === n){
            return -1;
        }

        if(possiveisJurados[trust[i][1]]){
            possiveisJurados[trust[i][1]] =  possiveisJurados[trust[i][1]] += 1;
           
        }else
            possiveisJurados[trust[i][1]] = 1;

        if(possiveisJurados[trust[i][1]] && possiveisJurados[trust[i][1]] === n-1){
            judge = trust[i][1];
        }
    }

    return judge;
};

console.log(findJudge(3,[[1,3],[2,3],[3,1]]));