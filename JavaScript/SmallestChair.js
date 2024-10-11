/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    for (let i=0; i<times.length; i++) {
        times[i].push(i);
    }
    times.sort((a,b) => a[0] - b[0]);
    let occuped = [];

    for(let time of times){
        let i = 0;
        if(occuped.length === 0)
            occuped.push(time[1]);
        else{
            while(occuped[i] > time[0]){
                i++;
            }

            if(i < occuped.length)
                occuped[i] = time[1];
            else
                occuped.push(time[1]);
        }

        if(time[2] === targetFriend)
            return i;
    }

   return 0;

};


console.log(smallestChair([[2,4],[10,16],[9,13], [1,1]], 2))