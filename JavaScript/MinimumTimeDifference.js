/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let minDiff = 0;
    const totalMinDay = 1440;

    let timePointsMin = timePoints.map((time) => {
        let timeHour = time.split(":")[0];
        let timeMin = time.split(":")[1];

        return parseInt(timeHour * 60) + parseInt(timeMin);
    });

    timePointsMin.sort((a,b) => b-a);
    minDiff = totalMinDay - (timePointsMin[0] - timePointsMin[timePointsMin.length-1]);
    for(let i= 0 ; i < timePointsMin.length -1; i++){
        minDiff = Math.min(minDiff, timePointsMin[i] - timePointsMin[i + 1]);
    }

    return minDiff;
};
console.log(findMinDifference(["23:59","00:00"]));