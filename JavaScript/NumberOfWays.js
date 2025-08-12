/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */

//10
var numberOfWays = function (n, x) {
    let ways = 0;

    const MOD = 1e9 + 7;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for(let i = 1; i <= n; i++){
        const power = Math.pow(i,x);

        if(power > n)
            break;

        for(let j = n; j >= power; j--){
           dp[j] = (dp[j] + dp[j - power]) % MOD;
        }
    }

    console.log(dp)
    ways = dp[n];
    return ways;
};