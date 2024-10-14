/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let score = 0;
    let i = 0;
    let maxPQ = new MaxPriorityQueue({compare: (a,b) => b-a});
    for(let num of nums){
        maxPQ.enqueue(num);
    }

    while(i < k){
        let n = maxPQ.dequeue();
        score+=n;
        maxPQ.enqueue(Math.ceil(n/3));
        i++;
    }

    return score;
};

console.log(maxKelements([756902131,995414896,95906472,149914376,387433380,848985151]))