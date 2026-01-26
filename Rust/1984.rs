impl Solution {
    pub fn minimum_difference(nums: Vec<i32>, k: i32) -> i32 {
        if(nums.len() < k as usize ){
            return 0;
        }
        let mut nums = nums;
        nums.sort_by(|a,b| b.cmp(a));
        
        let mut min_diff = i32::MAX;
        for i in 0..=nums.len()-k as usize {
            let diff = nums[i] - nums[i+k as usize - 1];
            min_diff = min_diff.min(diff);
        }
        
        min_diff
    }
}
