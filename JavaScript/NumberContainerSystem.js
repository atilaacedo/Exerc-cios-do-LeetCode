    //Time Limit Exceed
    
    var mapIndexToNumber = new Map();
    var numberToIndex = new Map();

    var NumberContainers = function() {
        mapIndexToNumber = new Map();
        numberToIndex = new Map();
    };

    /** 
     * @param {number} index 
     * @param {number} number
     * @return {void}
     */
    NumberContainers.prototype.change = function(index, number) {
        if(mapIndexToNumber.has(index)){
            const previousNumber = mapIndexToNumber.get(index);

            numberToIndex.get(previousNumber).delete(index);

            if(numberToIndex.get(previousNumber).size === 0){
                numberToIndex.delete(previousNumber);
            }
        }

        mapIndexToNumber.set(index, number);

        if(!numberToIndex.has(number)){
            numberToIndex.set(number, new Set());
        }
        
        numberToIndex.get(number).add(index);
    };

    /** 
     * @param {number} number
     * @return {number}
     */
    NumberContainers.prototype.find = function(number) {
        if(numberToIndex.has(number)){
            const arrAux = Array.from(numberToIndex.get(number));
           
            arrAux.sort((a,b) => a-b);
            return arrAux[0];  
        }

        return -1;
    };

    /** 
     * Your NumberContainers object will be instantiated and called as such:
     * var obj = new NumberContainers()
     * obj.change(index,number)
     * var param_2 = obj.find(number)
     */