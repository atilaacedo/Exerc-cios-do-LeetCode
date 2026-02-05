impl Solution {
    pub fn construct_transformed_array(nums: Vec<i32>) -> Vec<i32> {
        let len = nums.len();
        let mut result = Vec::with_capacity(len);

        for(i, &n) in nums.iter().enumerate(){
            let current_index = i as isize;
            let steps = n as isize;
            let length = len as isize;

            let target_index = current_index + steps;

            let final_index = ((target_index % length) + length) % length;

            result.push(nums[final_index as usize]);

        }

        result
    }
}
