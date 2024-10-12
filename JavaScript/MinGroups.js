/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);

    let groups = [];

    for(let interval of intervals){
        if(groups.length > 0 && groups[0] < interval[0]){
            groups.shift();
        }

        groups.push(interval[1]);

        groups.sort((a,b) => a -b);
    }



    return groups.length;
};

console.log(minGroups([[5,10],[6,8],[1,5],[2,3],[1,10]]));