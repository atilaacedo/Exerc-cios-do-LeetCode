impl Solution {
    pub fn minimum_cost(nums: Vec<i32>) -> i32 {
        let first_number = nums[0];
        let mut nums = nums;
        nums.remove(0);

        nums.sort_by(|a, b| a.cmp(b));

        first_number + nums[0] + nums[1]
    }
}
