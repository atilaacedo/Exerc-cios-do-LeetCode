impl Solution {
    pub fn find_rotation(mat: Vec<Vec<i32>>, target: Vec<Vec<i32>>) -> bool {
        let mut is_equal = true;
        let mut one_rotation = true;
        let mut two_rotation = true;
        let mut three_rotation = true;

        for i in 0..mat.len() as usize {
            for j in 0..mat[0].len() as usize{
                if mat[i][j] != target[i][j] {
                    is_equal = false;
                }

                if mat[i][j] != target[j][mat[i].len() - 1 - i] {
                    one_rotation = false;
                }

                if mat[i][j] != target[mat.len() - 1 - i][mat[i].len() - 1 - j] {
                    two_rotation = false;
                }

                if mat[i][j] != target[mat.len() - 1 - j][i]  {
                    three_rotation = false;
                }
            }
        }


        is_equal || one_rotation || two_rotation || three_rotation
    }
}