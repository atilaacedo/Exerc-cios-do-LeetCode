<?php 

class Solution {

    function twoSum($nums, $target) {
        $numMap = [];

        foreach($nums as $index => $num){
            $complement = $target - $num;
        
            if(array_key_exists($complement, $numMap)) {
                return [$numMap[$complement], $index];
            }

            $numMap[$num] = $index;
        }

        return [];
    }
}