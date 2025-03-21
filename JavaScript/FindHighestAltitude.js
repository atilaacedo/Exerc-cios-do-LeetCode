/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altitude = gain[0];
    let highestAltitude = Math.max(0, gain[0]);

    for(let i = 1; i < gain.length; i++){

        
        altitude+=gain[i];

        highestAltitude = Math.max(highestAltitude, altitude);
    }

    return highestAltitude;
};