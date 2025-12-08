/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let ans = 0;

    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            let c = Math.floor(Math.sqrt(i * i + j * j));
            if(c <= n && c * c === i * i + j * j){
                ans++;
            }
        }
    }

    return ans;
};