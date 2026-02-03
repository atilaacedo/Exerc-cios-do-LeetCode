impl Solution {
    pub fn is_trionic(nums: Vec<i32>) -> bool {
        let n = nums.len();

        if nums[0] >= nums[1] {
            return false;
        }

        let mut count = 1;

        for i in 2..n {
            if(nums[i-1] == nums[i]){
                return false;
            }

            if(nums[i-2] - nums[i-1]) * (nums[i-1] - nums[i]) < 0{
                count++;
            }
        }

        count == 3
    }
}
