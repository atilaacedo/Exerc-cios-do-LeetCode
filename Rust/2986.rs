impl Solution {
    pub fn minimum_cost(source: String, target: String, original: Vec<char>, changed: Vec<char>, cost: Vec<i32>) -> i64 {
        const INF: i64 = 1_000_000_000_000; 
        let mut dp = vec![vec![INF; 26]; 26];

        for i in 0..26 {
            dp[i][i] = 0;
        }

        for i in 0..original.len() {
            let u = (original[i] as u8 - b'a') as usize;
            let v = (changed[i] as u8 - b'a') as usize;
            let c = cost[i] as i64;
            
            dp[u][v] = dp[u][v].min(c);
        }

        for k in 0..26 {
            for i in 0..26 {
                for j in 0..26 {
                    if dp[i][k] + dp[k][j] < dp[i][j] {
                        dp[i][j] = dp[i][k] + dp[k][j];
                    }
                }
            }
        }

        let mut total: i64 = 0;
        let s_bytes = source.as_bytes();
        let t_bytes = target.as_bytes();

        for i in 0..s_bytes.len() {
            let u = (s_bytes[i] - b'a') as usize;
            let v = (t_bytes[i] - b'a') as usize;
            
            if dp[u][v] >= INF {
                return -1; 
            }
            total += dp[u][v];
        }

        total
    }
}
