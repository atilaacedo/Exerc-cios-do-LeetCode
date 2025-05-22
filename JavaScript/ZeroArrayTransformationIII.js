/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function (nums, queries) {
    queries.sort((a, b) => a[0] - b[0]);
    const heap = new MaxPriorityQueue();

    const aux = new Array(nums.length + 1).fill(0);

    let op = 0;

    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        op += aux[i];

        while (j < queries.length && queries[j][0] === i) {
            heap.push(queries[j][1]);
            j++;
        }

        while(op < nums[i] && heap.size()> 0 && heap.front() >= i){
            op++;
            aux[heap.pop() + 1]--;
        }

        if(op < nums[i]){
            return -1;
        }
    }

    return heap.size();
};