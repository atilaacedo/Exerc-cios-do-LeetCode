
class MaxPriorityQueue {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._up(this.heap.length - 1);
    }

    pop() {
        if(this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._down(0);
        return top;
    }

    _up(i) {
        while (i > 0) {

            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent][0] >= this.heap[i][0]) return;

            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    _down(i) {
        let size = this.heap.length;
        while(true){
            let l = 2 * i + 1, r = 2 * i + 2, max = i;
            if (l < n && this.heap[l][0] > this.heap[max][0]) max = l;
            if (r < n && this.heap[r][0] > this.heap[max][0]) max = r;
            if (max === i) break;
            [this.data[i], this.data[max]] = [this.data[max], this.data[i]];
            i = max;
        }
    }

    size(){
        return this.heap.length;
    }
}

/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {

    let ans = 0;

    const pq = new MaxPriorityQueue();

    for(const c of classes){
        pq.push([getGain(c[0], c[1]), c[0], c[1]]);
    }

    while(extraStudents > 0){

        let [gain, pass, total] = pq.pop();
        pass++; total++;
        pq.push([getGain(pass, total), pass, total]);

        extraStudents--;
    }

    while(pq.size() > 0){
        let [gain, pass, total] = pq.pop();
        ans += pass / total;
    }

    return ans / classes.length;
};


const getGain = (pass, total) => (pass + 1) / (total + 1) - pass / total;

