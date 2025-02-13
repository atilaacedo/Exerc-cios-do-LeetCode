    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    var minOperations = function (nums, k) {
        const minHeap = new MinHeap(nums);
        
        let op = 0;

        while(minHeap.size() >=2 && minHeap.peek() < k){
            const x = minHeap.extractMin();
            const y = minHeap.extractMin();
            
            const newNum = Math.min(x, y) * 2 + Math.max(x, y);

            heap.insert(newNum);
            op++;
        }

        return op;
    };


    class MinHeap {
        constructor(nums) {
            this.heap = [];
            for (const num of nums) {
                this.insert(num);
            }
        }
    
        size() {
            return this.heap.length;
        }
    
        peek() {
            return this.heap[0];
        }
    
        insert(value) {
            this.heap.push(value);
            this.bubbleUp(this.heap.length - 1);
        }
    
        extractMin() {
            const min = this.heap[0];
            const end = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = end;
                this.bubbleDown(0);
            }
            return min;
        }
    
        bubbleUp(index) {
            const element = this.heap[index];
            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                const parent = this.heap[parentIndex];
                if (element >= parent) break;
                this.heap[index] = parent;
                index = parentIndex;
            }
            this.heap[index] = element;
        }
    
        bubbleDown(index) {
            const length = this.heap.length;
            const element = this.heap[index];
            while (true) {
                let leftChildIndex = 2 * index + 1;
                let rightChildIndex = 2 * index + 2;
                let swap = null;
    
                if (leftChildIndex < length) {
                    const leftChild = this.heap[leftChildIndex];
                    if (leftChild < element) {
                        swap = leftChildIndex;
                    }
                }
    
                if (rightChildIndex < length) {
                    const rightChild = this.heap[rightChildIndex];
                    if (
                        (swap === null && rightChild < element) ||
                        (swap !== null && rightChild < this.heap[swap])
                    ) {
                        swap = rightChildIndex;
                    }
                }
    
                if (swap === null) break;
                this.heap[index] = this.heap[swap];
                index = swap;
            }
            this.heap[index] = element;
        }
    }