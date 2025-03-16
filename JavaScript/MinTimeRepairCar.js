/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let low = 1, high = Math.min(...ranks) * cars * cars;

    while(low < high){
        let mid = Math.floor((low + high) / 2);

        let carsRepaired = 0;

        for(const rank of ranks){
            carsRepaired += Math.floor(Math.sqrt(mid / rank));
        }

        if(carsRepaired >= cars){
            high = mid;
        }else{
            low = mid + 1;
        }
    }

    return low;
};