use std::collections::HashMap;

impl Solution {
    pub fn num_equiv_domino_pairs(dominoes: Vec<Vec<i32>>) -> i32 {
        let mut ans: i32 = 0;
        let mut map: HashMap<Vec<i32>, i32> = HashMap::new();

        for pair in dominoes {
            let mut pair = pair.clone();
            pair.sort();

           
            if let Some(&count) = map.get(&pair) {
                ans += count;
            }

            
            *map.entry(pair).or_insert(0) += 1;
        }

        ans
    }
}
